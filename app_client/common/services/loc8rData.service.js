(function () {
    angular
        .module('loc8rApp')
        .service('loc8rData', loc8rData);

    loc8rData.$inject = ['$http'];
    function loc8rData($http) {
        var locationByCoords = function (lat, lng) {
            //return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
            return $http.get('/api/locations?lng=24.029716999999998&lat=49.7807594&maxDistance=20');
        };

        var locationById = function (locationid) {
            return $http.get('/api/locations/' + locationid);
        };

        var addReviewById = function (locationid, data) {
            return $http.post('/api/locations/' + locationid + '/reviews', data);
        };

        return {
            locationByCoords: locationByCoords,
            locationById: locationById,
            addReviewById: addReviewById
        };
    }
})();