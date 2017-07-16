(function () {
    'use strict';

    angular
        .module('portfolio')
        .directive('bghViewMenuItem', Directive);

    function Directive() {
        return {
            require: '^bghViewMenuBlock',
            restrict: 'E',
            replace: true,
            scope: {
                label: '@',
                icon: '@?',
                handle: '@',
                isLoading: '=?',
                onEnter: '&?',
                onLeave: '&?'
            },
            templateUrl: 'js/templates/bgh-view-menu-item.html',
            transclude: true,
            controller: Controller,
            controllerAs: 'vm',
            link: function (scope, elements, attrs, bghViewMenuBlockCtrl) {
                var vm = scope.vm;

                vm.link.bghViewMenuBlockCtrl = bghViewMenuBlockCtrl;

                bghViewMenuBlockCtrl.addTab(vm);
            },
            bindToController: true
        };
    }

    Controller.$inject = ['$scope'];

    function Controller($scope) {
        var vm = this;

        vm.link = {
            bghViewMenuBlockCtrl: null
        };

        vm.state = {
            isActive: false,
            isDisabled: false,
            isLoading: false
        };

        // Bindable methods
        vm.select = select;

        activate();

        function activate() {
            $scope.$watch('vm.isLoading', function(value) {
                vm.state.isLoading = value;
            });

            if (vm.onEnter || vm.onLeave) {
                $scope.$watch('vm.state.isActive', function (newValue, oldValue) {
                    if (newValue && !oldValue) {
                        if (vm.onEnter) {
                            vm.onEnter();
                        }
                    } else if (!newValue && oldValue) {
                        if (vm.onLeave) {
                            vm.onLeave();
                        }
                    }
                });
            }
        }

        function select() {
            vm.link.bghViewMenuBlockCtrl.tabModel = vm.handle;
        }
    }
})();
