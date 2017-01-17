import * as angular from 'angular';

//import pages 
import landingPage from './landing-page/landing-page';

export default angular.module('app.views', [])
.component('landingPage', landingPage);