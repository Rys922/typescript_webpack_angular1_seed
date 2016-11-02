export function appHttpConfig($httpProvider) {
  $httpProvider.defaults.withCredentials = true;// SEND CREDENTIALS with Ajax calls to other domains -prevent CORS iisues
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
}
appHttpConfig.$inject = ['$httpProvider'];