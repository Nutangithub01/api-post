import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http:HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/posts";
  users()
  {
    return this.http.get(this.url);
  }
  saveUser(data:any)
  {
    return this.http.post(this.url,data);
  }
}
