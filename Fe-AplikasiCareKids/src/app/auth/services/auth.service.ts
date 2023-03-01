import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Register } from '../classes/register';
import { Login } from '../classes/login';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogin$ = new BehaviorSubject<boolean>(false);
  isLogin$ = this._isLogin$.asObservable();

  get token() {
    return localStorage.getItem('token');
  }

  url = "http://192.168.43.96:8000/api/";

  constructor(private http: HttpClient) {
    this._isLogin$.next(!!this.token);
  }

  postRegister(data: Register): Observable<Register> {
    return this.http.post<Register>(this.url + 'register', data);
  }

  postLogin(data: Login): Observable<Login> {
    return this.http.post<Login>(this.url + 'login', data).pipe(
      tap((res: any) => {
        this._isLogin$.next(true);
        localStorage.setItem('token', res.access_token);
      })
    );
  }
}
