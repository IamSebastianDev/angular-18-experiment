import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../lib/models/user.model';

@Injectable({
    providedIn: 'root',
})
export class PageService {
    private readonly httpClient = inject(HttpClient);

    // Abstract Login into a accompanying page service
    getUser() {
        return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/1');
    }
}
