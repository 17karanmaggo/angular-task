import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}
  base_url: string = environment.base_url;
  signUp(body: any) {
    debugger
    var url = this.base_url + '/api/v1/alumni/registration';
    return this.httpClient.post<any>(url, body);
  }
}
