angular.module('Daas', [
  'ui.router',
  'ngMaterial',
  'ngMdIcons',
  'Daas.auth.service',
  'Daas.main.dashboards.apiService',
  'Daas.auth',
  'Daas.main',
  'Daas.main.dashboards'
])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){
  $mdThemingProvider.theme('default')
    .primaryPalette('purple', {
      'default': '600'
    })
    .accentPalette('orange', {
      'default': '700'
    });
  $stateProvider
    .state('app',{
      url: '',
      abstract: true,
      template: '<ui-view />'
    })
})

