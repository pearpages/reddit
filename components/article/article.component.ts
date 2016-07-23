import { Component, Input } from '@angular/core';
import { Article } from './article';

@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    template: `
<div class="four wide column center aligned votes">
    <div class="ui statistic">
        <div class="value">{{article.votes}}</div>
        <div class="label">Points</div>
    </div>
</div>
<div class="twelve wide column">
    <a href="{{link}}" class="ui large header">{{article.title}}</a>
    <div class="meta">({{article.domain()}})</div>
    <ul class="ui big horizontal list voters">
        <li class="item">
            <a (click)="voteUp()">
                <i class="arrow up icon"></i> upvote
            </a>
        </li>
        <li class="item">
            <a (click)="voteDown()">
                <i class="arrow down icon"></i> downvote
            </a>
        </li>
    </ul>
</div>
    `
})
export class ArticleComponent {

    @Input() article: Article;

    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }
}