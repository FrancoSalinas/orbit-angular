var app = angular.module('francoSalinasMendoza', [
    'ui.bootstrap',
    'ngSanitize',
    'ngCookies',
    'pascalprecht.translate',
    'slugifier'
]);

app.factory('content', ['$http', function($http) {
    return {
        get: function(lang) {
            return $http.get('content/' + lang); 
        }
    };
}]);

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider
    .useStaticFilesLoader({
        prefix: '/objects/',
        suffix: '.json'
    })
    .useSanitizeValueStrategy('sanitizeParameters')
    .preferredLanguage('es');
}]);

app.controller('MainCtrl', [
    '$http',
    '$translate',
    '$cookieStore',
    'content',
    function($http, $translate, $cookieStore, content) {
        var controller = this;

        controller.setLocale = function(lang) {

            content.get(lang)
            .success(function(data) {
                $translate.use(lang);

                controller.content = data;

                $cookieStore.put('lang', lang);
            })
            .error(function(data, status, error, config) {
                alert("couldn't laod content.");
            });
            
        }

        var lang = $cookieStore.get('lang');
        lang = lang || (window.navigator.languages ? window.navigator.languages[0] : null);
        lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage || 'es';
        if (lang.indexOf('-') !== -1)
        {
            lang = lang.split('-')[0];
        }

        if (lang.indexOf('_') !== -1)
        {
            lang = lang.split('_')[0];
        }
        
        controller.setLocale(lang);
    }
]);
