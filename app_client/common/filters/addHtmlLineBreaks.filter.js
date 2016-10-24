﻿(function () {
    angular
        .module('loc8rApp')
        .filter('addHtmlLineBreaks', addHtmlLineBreaks);
    function addHtmlLineBreaks() {
        return function (text) {
            var output = text.replace(/\n/, '<br/>');
            return output;
        };
    }
})();