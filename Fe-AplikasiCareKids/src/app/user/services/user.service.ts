import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//class
import { Contact } from '../classes/contact';
import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://192.168.43.96:8000/api/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url + 'article');
  }

  getCarousel() {
    return this.http.get(this.url + 'carousel');
  }

  getAbout() {
    return this.http.get(this.url + 'about');
  }

  getSetting() {
    return this.http.get(this.url + 'setting');
  }

  postContact(data: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url + 'contact', data);
  }

  getEducation() {
    return this.http.get(this.url + 'article/category/2');
  }

  getEducationById(id: string) {
    return this.http.get(this.url + 'article/' + id);
  }

  getImage(article_id: string): Observable<any> {
    return this.http.get(this.url + 'image/' + article_id);
  }

  postComment(CommentForm: Comment, article_id: string): Observable<any> {
    return this.http.post<Comment>(this.url + 'comment/' + article_id, CommentForm);
  }

  getComment(article_id: string): Observable<any> {
    return this.http.get(this.url + 'comment/' + article_id);
  }

  getNews() {
    return this.http.get(this.url + 'article/category/1');
  }

  getNewsById(id: string) {
    return this.http.get(this.url + 'article/' + id);
  }
}
