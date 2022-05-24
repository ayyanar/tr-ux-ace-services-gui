/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/retry';

@Injectable()
export class HttpService {

constructor(private httpClient: HttpClient) {}

 public get <T>(url: string): Observable<T> {
   return this.httpClient.get<any>(url);
 }

 public getP<T>(url: string, params: HttpParams): Observable<T> {
    return this.httpClient.get<any>(url, {params});
 }

 public post<T>(url: string, data: any): Observable<T> {
    return this.httpClient.post<T>(url, data,
        {headers: new HttpHeaders().set('Content-Type', 'application/json')});
 }

 public put<T>(url: string, data: any): Observable<T> {
    return this.httpClient.put <T>(url, data,
        {headers: new HttpHeaders().set('Content-Type', 'application/json')});
 }

 public delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url);
 }

 public downloadBlob(url: string, data: any) {
  return this.httpClient.put(url, data,
    {headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'blob' });
 }

 public getText(url: string) {
   return this.httpClient.get(url, {
     responseType: 'text'}
   );
 }

 public downloadBlobGet(url: string) {
   return this.httpClient.get(url, {
     responseType: 'arraybuffer', headers: new HttpHeaders()}
   );
 }

}
