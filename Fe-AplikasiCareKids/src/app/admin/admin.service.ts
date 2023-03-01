import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  showDialog = false;
  //url
  url = 'http://192.168.43.96:8000/api/';

  constructor(private http: HttpClient) {
    this.getVisitor();
    this.getAllComment();
    this.getPesan();
  }

  getPostingan(id: any) {
    return this.http.get(this.url + 'article/' + id)
  }

  getImage(article_id: string): Observable<any> {
    return this.http.get(this.url + 'image/' + article_id);
  }

  getProfileById(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.url + 'profile/' + id, { headers: headers })
  }

  getVisitor() {
    return this.http.get(this.url + 'visitor');
  }

  getAllComment() {
    return this.http.get(this.url + 'comment');
  }

  getPesan() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.url + 'contact', { headers: headers });
  }

  delPesan(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.delete(this.url + 'contact/' + id, { headers: headers });
  }

  getEdukasi() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.url + 'article/category/2', { headers: headers });
  }

  getPublic() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.url + 'article/status/3', { headers: headers });
  }

  getDraft() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.url + 'article/status/1', { headers: headers });
  }

  getTrash() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.url + 'article/trash', { headers: headers });
  }

  addPostinganPublic(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(this.url + 'article/', data, { headers: headers });
  }

  addImage(data: any, id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(this.url + 'image/' + id, data, { headers: headers });
  }

  addPostinganDraft(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(this.url + 'article-draft', data, { headers: headers });
  }

  getCurrentPost(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.url + 'article/' + id, { headers: headers });
  }

  editPostPublic(id: any, data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.put(this.url + 'article/' + id, data, { headers: headers });
  }

  deletePostingan(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.delete(this.url + 'article/' + id, { headers: headers });
  }

  getRestore(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.url + 'article/restore/' + id, { headers: headers });
  }

  deletePermanentPostingan(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.delete(this.url + 'article/force/' + id, { headers: headers });
  }
}
