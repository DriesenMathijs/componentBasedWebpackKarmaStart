import * as angular from 'angular';

//import services
import ExampleService from './exampleService';

export default angular.module('app.services', [])
.service(ExampleService.iid, ExampleService);