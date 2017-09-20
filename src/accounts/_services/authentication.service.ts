import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
    authUrl = 'http://localhost:8080/uaa/oauth/token'
    public redirectUrl: string;
    private loggedIn = false;

    constructor(private http: Http, private router: Router) {
    }

    login(username: string, password: string) {
        const headers = new Headers();
        headers.append('Content-Type',
            'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic YnJvd3NlcjpzZWNyZXQ=');
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('grant_type', 'password');
        const body = urlSearchParams.toString();

        return this.http.post(this.authUrl, body, {headers: headers}
        ).map((response: Response) => {

            // login successful if there's a jwt token in the response
            const user = response.json();
            if (user && user.access_token) {
                console.log('user is logged in');
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isLoggedIn() {
        if (localStorage.getItem('currentUser')) {
            console.log(localStorage.getItem('currentUser'));
            return true;
        } else false;
    }
}
