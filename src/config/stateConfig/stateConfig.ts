// we need to manually annotate DI


export function provideState($stateProvider, $urlRouterProvider, $locationProvider){
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      component: "ing-app" 
    });
}
provideState.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];