import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { ArticleComponent } from './components/article/article.component';
import { Article } from './components/article/article';

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    template: `
    <form class="ui large form segment">
        <h3 class="ui header">Add a Link</h3>

        <div class="field">
            <label for="title">Title: </label>
            <input name="title" #newtitle>
        </div>
        <div class="field">
            <label for="link">Link: </label>
            <input name="link" #newlink>
        </div>
        
        <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">Submit link</button>
    </form>

    <div class="ui grid posts">
        <reddit-article *ngFor="let article of sortedArticles()" [article]="article"></reddit-article>
    </div>
    `
})
class RedditApp {

    articles: Article[];
    
    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io'),
            new Article('Angular Homepage', 'http://angular.io', 1)
        ];
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        this.articles.push(new Article(title.value,link.value));
    }

    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}

bootstrap(RedditApp);