(function() {
    'use strict';

    angular
        .module('portfolio')
        .controller('IndexController', Controller);

    Controller.$inject = ['category', 'Chunker'];

    function Controller(category, Chunker) {
        var vm = this;

        vm.category = category;
        vm.chunkedPacks = Chunker.getChunkedArray(category.packs, 4);
    }
})();