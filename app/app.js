var app = angular.module('francoSalinasMendoza', [
    'ui.bootstrap',
    'ngSanitize',
    'pascalprecht.translate'
]);

app.factory('content', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('lang/es'); 
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

            content.get()
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
