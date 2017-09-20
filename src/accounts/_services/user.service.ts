import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {User} from '../_models/user';

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    private accountsApi: string = "http://localhost:8080/accounts"

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.accountsApi + '/register', user, this.basic()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            const headers = new Headers({
                'Authorization': 'Bearer ' + currentUser.access_token,
                'Content-Type': 'application/json'
            });
            return new RequestOptions({headers: headers});
        }
    }

    private basic() {
        const headers = new Headers({
            'Authorization': 'Basic YnJvd3NlcjpzZWNyZXQ=',
            'Content-Type': 'application/json; charset=UTF-8'
        });
        return new RequestOptions({headers: headers});

    }
}
