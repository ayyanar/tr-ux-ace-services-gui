import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class HttpService {
    private httpClient;
    constructor(httpClient: HttpClient);
    get<T>(url: string): Observable<T>;
    getP<T>(url: string, params: HttpParams): Observable<T>;
    post<T>(url: string, data: any): Observable<T>;
    put<T>(url: string, data: any): Observable<T>;
    delete<T>(url: string): Observable<T>;
    downloadBlob(url: string, data: any): Observable<Blob>;
    getText(url: string): Observable<string>;
    downloadBlobGet(url: string): Observable<ArrayBuffer>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpService>;
}
