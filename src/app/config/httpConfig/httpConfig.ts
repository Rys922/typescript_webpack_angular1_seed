export function appHttpConfig($httpProvider): void {
  $httpProvider.defaults.withCredentials = true; // send credentials with Ajax calls to other domains -prevent CORS iisues
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
}
appHttpConfig.$inject = ["$httpProvider"];