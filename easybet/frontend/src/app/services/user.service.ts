import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/user/message.model';
import { MessageLogIn } from '../models/user/message-login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userUrlRegister = "http://localhost:3000/users/register";
  private readonly userUrlLogIn = "http://localhost:3000/users/login";

  constructor(private http: HttpClient) { 

  }

  public registerUser(data): Observable<Message> {
    const body = {...data};
    return this.http.post<Message>(this.userUrlRegister, body);
  }

  public logInUser(data): Observable<MessageLogIn>{
    const body = {...data};
    return this.http.post<MessageLogIn>(this.userUrlLogIn, body);
  }

}
