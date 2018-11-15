import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppConfig } from '../app-config';

@Injectable({
    providedIn: 'root', useExisting: false
})

export class ApiBaseService {

    constructor(
        private httpClient: HttpClient,
        private appConfig: AppConfig
    ){
    }

    private handleError<T>(err: any, data: Observable<T>) : ObservableInput<T> {
        this.reportError(err);
        throw err;
    }

    private reportError(err: any) {
        try{
            if (err.status === 0){
                console.info('Cannot connect to server. Please check your connection');
                return;
            }
            const error = JSON.parse(err.error);
            if (error && error.Statuses) {
                error.Statuses.forEach(s => console.info(`${s.Code}: ${s.Message}`));
            }
        } catch (e) {
            console.info(`General communication error: ${err.message || err}`);
        }
    }

    normalizeUrl(url:string, args = null) {
        if (url.startsWith('/')) {
            url = url.substr(1);
        }

        let result = this.appConfig.apiEndPoint;
        if (!result.endsWith('/')){
            result += '/';
        }
        return result + url;
    }

    get<T>(url: string, args: any = null): Observable<T> {
        return this.httpClient
            .get<T>(this.normalizeUrl(url, args))
            .pipe(
                catchError((x, data) => this.handleError(x, data))
            );
    }
}



































