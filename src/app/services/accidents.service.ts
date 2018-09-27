import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccidentsService {
    private url = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getTest(): Observable<any> {
        return this.http.get(this.url + '');
    }

    getMortalAccidents(): Observable<any> {
        return this.http.get(this.url + 'accidents/mortal');
    }

    getWounded(): Observable<any> {
        return this.http.get(this.url + 'accidents/wounded');
    }

    getTravels(): Observable<any> {
        return this.http.get(this.url + 'accidents/travel');
    }
}
