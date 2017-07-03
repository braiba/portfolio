(function() {
    'use strict';

    angular
        .module('portfolio')
        .service('Chunker', Service);

    Service.$inject = [];

    function Service() {
        return {
            getChunked: getChunked,
            getChunkedArray: getChunkedArray,
            getChunkedMap: getChunkedMap
        };

        function getChunked(chunkable, chunkSize) {
            if (Array.isArray(chunkable)) {
                return getChunkedArray(chunkable, chunkSize);
            } else {
                return getChunkedMap(chunkable, chunkSize);
            }
        }

        function getChunkedArray(array, chunkSize) {
            var chunks = [];
            for (var i=0, j=array.length; i<j; i+=chunkSize) {
                chunks.push(array.slice(i, i+chunkSize));
            }
            return chunks;
        }

        function getChunkedMap(map, chunkSize) {
            var chunks = [];
            var chunk = {};
            var chunkItemCount = 0;
            angular.forEach(map, function(value, key) {
                chunk[key] = value;
                if (++chunkItemCount == chunkSize) {
                    chunks.push(chunk);
                    chunk = {};
                    chunkItemCount = 0;
                }
            });

            if (chunkItemCount != 0) {
                chunks.push(chunk);
            }

            return chunks;
        }
    }
})();
