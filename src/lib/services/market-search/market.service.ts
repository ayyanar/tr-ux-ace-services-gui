/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FullMarketResponse, RuleReportRes } from '../../models/index';
// import 'rxjs/add/operator/retry';

@Injectable()
export class MarketService {
    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    constructor(private httpClient: HttpClient) { }
    public getFullMarketDetails(url, params): Observable<FullMarketResponse> {
        return this.httpClient.get<FullMarketResponse>(url, { params });
    }

    public postCustomEdifactRequest(url, args): Observable<RuleReportRes> {
        const params = {
            edifact_resp: args.edifact, traps: ['bft', 'bid', 'compseats', 'bfa', 'rules','ind'],
            simulation: args.simulation,            
            gui_request: true
        };
        return this.httpClient.post<RuleReportRes>(url, JSON.stringify(params), this.options);
    }

    public getAllReports(url, args): Observable<RuleReportRes> {
        const params = JSON.stringify(args);
        return this.httpClient.post<RuleReportRes>(url, params, this.options);
    }

    public getBaseFareDetails(url, args) {
        const params = args.params;
        return this.httpClient.get(url + args.url, { params });
    }

    public getBidPriceDetails(url, args) {
        const params = args.params;
        return this.httpClient.get(url + args.url, {params});
    }
}
