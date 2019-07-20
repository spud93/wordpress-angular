import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Page } from './page';
import { Info } from './info';

import { environment } from '../environments/environment';

@Injectable()
export class PagesService {
    private readonly pagesUrl = this.location.prepareExternalUrl('/wp-json/wp/v2/pages');
    private readonly infoUrl = this.location.prepareExternalUrl('/wp-json');

    constructor(private httpClient: HttpClient, private location: Location) {
      console.log('Environment: ' + environment.api_root);

      if (environment.api_root) {
        this.pagesUrl = 'http://' + environment.api_root + '/wp-json/wp/v2/pages';
        this.infoUrl = 'http://' + environment.api_root + '/wp-json';
      }
    }

    public getPages(): Observable<Page[]> {
        return this.httpClient.get<Page[]>(this.pagesUrl);
    }

    public getInfo(): Observable<Info> {
        return this.httpClient.get<Info>(this.infoUrl);
    }

}
