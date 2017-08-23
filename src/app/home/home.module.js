//require('./home.scss');

import HomeCtrl from './home.controller.js';

const HomeModule = angular
  .module('webDev.home', [])
	.controller('HomeCtrl', HomeCtrl)
  .config(function($stateProvider) {
  	$stateProvider
  	  .state('home', {
  	  	url: '/home',
  	  	template: require('./home.html'),
  	  	controller: HomeCtrl,
  	  	controllerAs: 'home'
  	  });
  });

export default HomeModule;
