import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/user/message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userUrl = "http://localhost:3000/users/";

  constructor(private http: HttpClient) { 

  }

  public registerUser(data): Observable<Message> {
    const body = {...data};
    return this.http.post<Message>(this.userUrl, body);
  }

}
