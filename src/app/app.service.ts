import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UTIL } from './BASE_URL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getPageVisits() {
    return this.http.get(`${UTIL.BASE_URL}${UTIL.VISITS}`);
  }
  public getAppDownloads() {
    return this.http.get(`${UTIL.BASE_URL}${UTIL.DOWNLOADS}`);
  }
  public getDemographics() {
    return this.http.get(`${UTIL.BASE_URL}${UTIL.DEMOGRAPHICS}`);
  }
  public getScreens() {
    return this.http.get(`${UTIL.BASE_URL}${UTIL.SCREENS}`);
  }
}
