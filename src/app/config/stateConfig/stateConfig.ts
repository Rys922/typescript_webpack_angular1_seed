export function provideState($stateProvider, $urlRouterProvider, $locationProvider){
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      component: "home"
    });

    var errorResolves  = { msg: function ($stateParams, $http, $timeout, $q) {
      
      
      var q = $timeout(function() {
            
            console.log("done");        
                }, 2000)
            
      return  q }};
    errorResolves.msg.$inject = ['$stateParams' , "$http", "$timeout" , "$q"];
    
    $stateProvider.state('error', {
      url: '/err/:message',
      component: "ingError" , 
      resolve: errorResolves
    });

    $stateProvider.state('grid', {
      url: '/grid',
      component: "grid" , 
    });
}
provideState.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
