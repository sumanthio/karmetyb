import 'angular';
import 'angular-animate/angular-animate.js';
import 'angular-sanitize/angular-sanitize.js';
import 'restangular/dist/restangular.js';
import 'angular-ui-bootstrap';

// import toaster from 'angularjs-toaster';
// import 'angularjs-toaster/toaster.css';
import angularUIRouter from 'angular-ui-router';

import books from './books/books.module';

let booksApp = angular.module('booksApp', [
  angularUIRouter,
  'restangular',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap',
  books
]);

booksApp.config(['$urlRouterProvider','$uibTooltipProvider',($urlRouterProvider, $uibTooltipProvider) => {
  $urlRouterProvider.otherwise("/books");
  $uibTooltipProvider.options({
    delay: { show: 100, hide: 900 }
  });
}]);