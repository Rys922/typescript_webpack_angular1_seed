export function appHttpConfig($httpProvider: ng.IHttpProvider): void {
  $httpProvider.defaults.withCredentials = true; // send credentials with Ajax calls to other domains -prevent CORS issues
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
}
appHttpConfig.$inject = ["$httpProvider"];