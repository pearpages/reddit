System.register(['@angular/platform-browser-dynamic', '@angular/core', './components/article/article.component', './components/article/article'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1, article_component_1, article_1;
    var RedditApp;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new article_1.Article('Angular 2', 'http://angular.io', 3),
                        new article_1.Article('Fullstack', 'http://fullstack.io'),
                        new article_1.Article('Angular Homepage', 'http://angular.io', 1)
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    this.articles.push(new article_1.Article(title.value, link.value));
                };
                RedditApp.prototype.sortedArticles = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [article_component_1.ArticleComponent],
                        template: "\n    <form class=\"ui large form segment\">\n        <h3 class=\"ui header\">Add a Link</h3>\n\n        <div class=\"field\">\n            <label for=\"title\">Title: </label>\n            <input name=\"title\" #newtitle>\n        </div>\n        <div class=\"field\">\n            <label for=\"link\">Link: </label>\n            <input name=\"link\" #newlink>\n        </div>\n        \n        <button (click)=\"addArticle(newtitle, newlink)\" class=\"ui positive right floated button\">Submit link</button>\n    </form>\n\n    <div class=\"ui grid posts\">\n        <reddit-article *ngFor=\"let article of sortedArticles()\" [article]=\"article\"></reddit-article>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            }());
            platform_browser_dynamic_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=app.js.map