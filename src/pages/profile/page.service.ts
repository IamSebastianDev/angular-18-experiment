import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter } from 'rxjs';
import * as v from 'valibot';
import { User } from '../../lib/models/user.model';

@Injectable({
    providedIn: 'root',
})
export class PageService {
    private readonly httpClient = inject(HttpClient);

    // Abstract Login into a accompanying page service
    getUser() {
        return this.httpClient
            .get('https://jsonplaceholder.typicode.com/users/1')
            .pipe(filter((data) => v.is(User, data)));
    }
}
