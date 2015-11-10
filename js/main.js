import angular from 'angular';

import SearchController from './controllers/searchController';



// let app = angular.module('app', []);

// app.controller();

// Register a Module

angular
  .module('app', [])
  .controller('SearchController', SearchController);