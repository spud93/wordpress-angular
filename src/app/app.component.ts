import { Component, OnInit, OnDestroy } from '@angular/core';

import { PagesService } from './pages.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
    private sub: any;
    siteTitle = 'Wordpress Angular';

    constructor( private pagesService: PagesService ) { }

    ngOnInit() {
    this.sub = this.pagesService
                   .getInfo()
                   .subscribe(res => {
                       if (res.name) {
                         this.siteTitle = res.name;
                       }
                   });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
