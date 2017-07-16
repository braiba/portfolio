(function () {
    'use strict';

    angular
        .module('portfolio')
        .directive('bghViewMenuBlock', Directive);

    function Directive() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                tabModel: '=',
                viewPath: '@',
                searchKey: '@', // reflects the chosen tab in the address bar (route must have reloadOnSearch: false)
                onChangeTab: '&'
            },
            templateUrl: 'js/templates/bgh-view-menu-block.html',
            transclude: true,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    Controller.$inject = ['$location', '$scope', '$timeout'];

    function Controller($location, $scope, $timeout) {
        var vm = this;

        vm.contents = {
            itemMap: {},
            viewPathMap: {}
        };

        vm.state = {
            defaultTab: null,
            activeTab: null
        };

        // Bindable methods
        vm.addTab = addTab;
        vm.removeTab = removeTab;

        activate();

        function activate() {
            if (vm.searchKey) {
                var searchParams = $location.search();
                if (searchParams.hasOwnProperty(vm.searchKey)) {
                    vm.tabModel = searchParams[vm.searchKey];
                    vm.contents.viewPathMap[vm.tabModel] = vm.viewPath + '/' + vm.tabModel + '.html';
                }
            }

            $timeout(activateTabModelWatch);
        }

        function activateTabModelWatch() {
            $scope.$watch('vm.tabModel', function(newValue) {
                // Note: we don't use the oldValue param here, because it will be the same as newValue first time round
                if (newValue === vm.state.activeTab) {
                    return;
                }

                var oldValue = vm.state.activeTab;

                if (vm.state.activeTab && vm.contents.itemMap.hasOwnProperty(vm.state.activeTab)) {
                    vm.contents.itemMap[vm.state.activeTab].state.isActive = false;
                    vm.state.activeTab = null;
                }

                if (newValue && vm.contents.itemMap.hasOwnProperty(newValue)) {
                    vm.contents.viewPathMap[newValue] = vm.viewPath + '/' + newValue + '.html';

                    vm.contents.itemMap[newValue].state.isActive = true;
                    vm.state.activeTab = newValue;
                }

                if (vm.searchKey) {
                    $location.search(vm.searchKey, (vm.tabModel == vm.state.defaultTab ? undefined : vm.tabModel));
                }

                if (vm.onChangeTab) {
                    vm.onChangeTab({newValue: newValue, oldValue: oldValue});
                }
            });
        }

        function addTab(tab) {
            if (!vm.state.defaultTab) {
                vm.state.defaultTab = tab.handle;
            }

            vm.contents.itemMap[tab.handle] = tab;

            if (!vm.tabModel && tab.handle === vm.state.defaultTab) {
                vm.tabModel = tab.handle;
            }
        }

        function removeTab(tab) {
            delete vm.contents.itemMap[tab.handle];
        }
    }
})();
