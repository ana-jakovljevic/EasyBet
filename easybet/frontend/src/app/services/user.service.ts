import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Message } from '../models/user/message.model';
import { MessageLogIn } from '../models/user/message-login.model';
import { Observable } from 'rxjs';
import { MessageChangePassword } from '../models/user/message-changePassword.model';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userUrl = "http://localhost:3000/users";
  constructor(private http: HttpClient) {

  }

  public registerUser(data): Observable<Message> {
    const body = { ...data };
    return this.http.post<Message>(this.userUrl + "/register", body);
  }

  public logInUser(data): Observable<MessageLogIn> {
    const body = { ...data };
    return this.http.post<MessageLogIn>(this.userUrl + "/login", body);
  }

  public changePassword(data): Observable<MessageChangePassword> {
    let body = { ...data };
    return this.http.post<MessageChangePassword>(this.userUrl + "/changePassword", body);
  }

  public getUserInfo(username): Observable<User> {
    let params = new HttpParams();
    params = params.append("username", username);
    return this.http.get<User>(this.userUrl + "/userInfo", { params });
  }
}
