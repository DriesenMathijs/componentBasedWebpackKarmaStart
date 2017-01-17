require('./landing-page.less');

import {Component} from '../../../decorators';


//component to render the page
@Component({
    template: <string>require('./landing-page.html'),
    bindings: {

    }
})
export default class LandingPageComponent {
    title: string;
    contents: Array<string>;

    static $inject = [];

    constructor() {
        //initialize
        this.fillPage();
    }

    fillPage() {
        this.title = "LandingPage";
        this.contents = new Array<string>();
        this.contents.push(`I'm a 32 year old IT-man who works in a basement. Yes, I do the whole Lonely Hearts thing! OK. Moss, what did you have for breakfast this morning? Smarties cereal. I mean, they have no respect for us up there! No respect whatsoever! We're all just drudgeons to them! You mean 999. Yes, yes, I mean 999! Yeah, I know. That's the American one, you berk! If anyone was ever rude to me, I used to carry their food around in my trousers. Oh my God! Before you brought it to their table? No, after! Of course, before! Why would I do it after? Hello? I've had a bit of a tumble.`);
        this.contents.push(`Uh... okay, well, the button on the side, is it glowing? Hello, IT. Have you tried forcing an unexpected reboot? Today I have a business empire the like of which the world has never seen the like of which. I hope it doesn't sound arrogant when I say that I am the greatest man in the world! Graphic homoeroticism? Does that mean they're going to get them out? I've got Aunt Irma visiting. Oh, do you not like Aunt Irma? I've got an aunt like that. Shut up, do what I tell you, I'm not interested; these are just some of the things you'll be hearing if you answer this ad. I'm an idiot and I dont care about anyone but myself. P.S. No dogs!`);
        this.contents.push(`Hello, IT. Have you tried forcing an unexpected reboot? Yes! Yesterday's jam. That is what we are to them!... Actually, that doesn't work, as a thing, because, you know, jam lasts for ages. Huh, what you think I'm afraid of you? I'm not afraid of you. OK. Moss, what did you have for breakfast this morning? Smarties cereal. How can you two... Don't Google the question, Moss! Yes! Yesterday's jam. That is what we are to them!... Actually, that doesn't work, as a thing, because, you know, jam lasts for ages.`);
    }
}


