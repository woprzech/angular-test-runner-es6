//import uiRouter from 'angular-ui-router';

function getModuleName(module) { return module.name || module.default.name; }

const appDependencies = [
  'ui.router'
];

// const appModules = [
//   require('./home/home.module.js'),
// ];

angular
  .module('webDev', ['ui.router'])
  .config( /*@ngInject*/ ($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

  });
