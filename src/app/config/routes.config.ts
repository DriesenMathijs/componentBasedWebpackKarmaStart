routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function routeConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    //route definitions
    $stateProvider
    .state('home', {
        url: '/home',
        template: '<landing-page></landing-page>' 
    });
}
export default routeConfig;