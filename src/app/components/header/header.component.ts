require('./header.less');

import {Component} from '../../../decorators';

import ExampleService from '../../services/exampleService';

//Component
@Component({
    template: <string>require('./header.html'),
    bindings: {

    }
})
export default class HeaderComponent {
    //vars
    userName: string;

    static $inject = [ExampleService.iid];

    constructor(private exampleService: ExampleService) {
        this.getUsername();
    }

    getUsername() {
        this.userName = this.exampleService.getUserName();
    };
}