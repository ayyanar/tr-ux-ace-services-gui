import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FullMarketResponse, RuleReportRes } from '../../models/index';
import * as i0 from "@angular/core";
export declare class MarketService {
    private httpClient;
    private options;
    constructor(httpClient: HttpClient);
    getFullMarketDetails(url: any, params: any): Observable<FullMarketResponse>;
    postCustomEdifactRequest(url: any, args: any): Observable<RuleReportRes>;
    getAllReports(url: any, args: any): Observable<RuleReportRes>;
    getBaseFareDetails(url: any, args: any): Observable<Object>;
    getBidPriceDetails(url: any, args: any): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarketService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MarketService>;
}
