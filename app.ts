import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
    selector: 'reddit',
    template: `
    <form class="ui large form segment">
        <h3 class="ui header">Add a Link</h3>

        <div class="field">
            <label for="title">Title: </label>
            <input name="title" [(ngModel)]="newtitle">
        </div>
        <div class="field">
            <label for="link">Link: </label>
            <input name="link" [(ngModel)]="newlink">
        </div>
        
        <button (click)="addArticle()" class="ui positive right floated button">Submit link</button>
    </form>
    `
})
class RedditApp {

    newtitle: string;
    newlink: string;

    constructor() {}

    addArticle(): void {
        console.log(this.newtitle,this.newlink);
    }
}

bootstrap(RedditApp);