require('./title.less');

import {Component} from '../../../decorators';

@Component({
    template: <string>require('./title.html'),
    bindings: {
        "boundtitle": "<"
    }
})
export default class TitleComponent {
    boundtitle: any;

    static $inject = [];

    constructor() {
     }
}