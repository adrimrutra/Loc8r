(function () {
    angular
        .module('loc8rApp')
        .controller('aboutCtrl', aboutCtrl);

    function aboutCtrl() {
        var vm = this;
        vm.pageHeader = {
            title: 'About Loc8r',
        };
        vm.main = {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        };
    }
})();