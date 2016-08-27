var app = angular.module('francoSalinasMendoza', [
    'ui.bootstrap',
    'ngSanitize',
    'pascalprecht.translate',
    'slugifier'
]);

app.factory('content', ['$http', function($http) {
    return {
        get: function(lang) {
            return $http.get('lang/' + lang); 
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
    'content',
    function($http, $translate, content) {
        controller = this;

        controller.setLocale = function(lang) {
            $translate.use(lang);

            content.get(lang)
            .success(function(data) {
                controller.content = data;
            })
            .error(function(data, status, error, config) {
                alert("couldn't laod content.");
            });
            
        }
        
        controller.setLocale('es');
    }
]);
