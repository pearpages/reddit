System.register(['@angular/core', './article'], function(exports_1, context_1) {
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
    var core_1, article_1;
    var ArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            ArticleComponent = (function () {
                function ArticleComponent() {
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', article_1.Article)
                ], ArticleComponent.prototype, "article", void 0);
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        host: {
                            class: 'row'
                        },
                        template: "\n<div class=\"four wide column center aligned votes\">\n    <div class=\"ui statistic\">\n        <div class=\"value\">{{article.votes}}</div>\n        <div class=\"label\">Points</div>\n    </div>\n</div>\n<div class=\"twelve wide column\">\n    <a href=\"{{link}}\" class=\"ui large header\">{{article.title}}</a>\n    <div class=\"meta\">({{article.domain()}})</div>\n    <ul class=\"ui big horizontal list voters\">\n        <li class=\"item\">\n            <a (click)=\"voteUp()\">\n                <i class=\"arrow up icon\"></i> upvote\n            </a>\n        </li>\n        <li class=\"item\">\n            <a (click)=\"voteDown()\">\n                <i class=\"arrow down icon\"></i> downvote\n            </a>\n        </li>\n    </ul>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=article.component.js.map