import 'angular';
import 'angular-animate/angular-animate.js';
import 'angular-sanitize/angular-sanitize.js';
import 'restangular/dist/restangular.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-ui-bootstrap';
import 'font-awesome/css/font-awesome.css';
import './css/style.css';

import toaster from 'angularjs-toaster';
import 'angularjs-toaster/toaster.css';

import 'pace-progress/themes/white/pace-theme-minimal.css';
require('imports-loader?define=>false!pace-progress');

import angularUIRouter from 'angular-ui-router';

import booksModule from './books/books.module';

let booksApp = angular.module('booksApp', [
  angularUIRouter,
  'restangular',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap',
  toaster,
  booksModule
]);

booksApp.config(($locationProvider, $urlRouterProvider, $qProvider, $uibTooltipProvider, $httpProvider) => {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/list");
  $qProvider.errorOnUnhandledRejections(false);
  $uibTooltipProvider.options({
    delay: { show: 100, hide: 900 }
  });

  // Just to solve the book/ vs books/ bug in API
  
  $httpProvider.interceptors.push(function ($q) {
    return {
      'request': function (config) {
        if (config.url.indexOf('book/') > -1) {
          config.url = config.url.replace('book','books');
        }
        return config || $q.when(config);
      }

    }
  });
});