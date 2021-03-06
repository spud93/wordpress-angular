import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PagesService } from './pages.service';

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
    private pageSlug: string;
    private paramsSubscription: Subscription;
    private pageSubscription: Subscription;
    pageTitle: string;
    content: string;
    navigationLinks = [];
    pages = {};

    constructor(private route: ActivatedRoute, private pagesService: PagesService) {}

    ngOnInit() {
        const SLUG_KEY = 'slug';
        this.paramsSubscription = this.route.params.subscribe(params => {
            this.slug = params[SLUG_KEY];
        });
        this.getPageDetails();
    }

    getPageDetails() {
      this.pageSubscription = this.pagesService
                                   .getPages()
                                   .subscribe(
                                               res => {
                                                    for (const r of res) {
                                                        this.navigationLinks = res;
                                                        this.pages[r.slug] = r;
                                                        if (!this.slug) {
                                                          this.slug = r.slug;
                                                        }
                                                    }
                                                },
                                               error => console.log('Error: ', error),
                                               () => { this.refresh_values(); });
    }

    @Input()
    set slug(slug: string) {
        this.pageSlug = slug;
        this.refresh_values(slug);
    }

    get slug(): string {
        return this.pageSlug;
    }

    refresh_values(slug: string = this.slug): void {
        if (this.pages[slug] !== undefined) {
            this.pageTitle = this.pages[slug].title.rendered;
            this.content = this.pages[slug].content.rendered;
        }
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
        this.pageSubscription.unsubscribe();
    }

}
