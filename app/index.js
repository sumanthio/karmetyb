import 'angular';
import 'angular-animate/angular-animate.js';
import 'angular-sanitize/angular-sanitize.js';
import 'restangular/dist/restangular.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-ui-bootstrap';

// import toaster from 'angularjs-toaster';
// import 'angularjs-toaster/toaster.css';
import angularUIRouter from 'angular-ui-router';

import booksModule from './books/books.module';

let booksApp = angular.module('booksApp', [
  angularUIRouter,
  'restangular',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap',
  booksModule
]);

booksApp.config(($locationProvider, $urlRouterProvider, $uibTooltipProvider) => {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/books");

  $uibTooltipProvider.options({
    delay: { show: 100, hide: 900 }
  });
});