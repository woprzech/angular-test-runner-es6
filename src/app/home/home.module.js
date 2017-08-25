import HomeComponent from './home.controller';

const HomeModule = angular
    .module('home', [])
    .component(HomeComponent.name, HomeComponent.config);

export default HomeModule;
