/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// import 'rxjs/add/operator/retry';
export class MarketService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    }
    getFullMarketDetails(url, params) {
        return this.httpClient.get(url, { params });
    }
    postCustomEdifactRequest(url, args) {
        const params = {
            edifact_resp: args.edifact, traps: ['bft', 'bid', 'compseats', 'bfa', 'rules', 'ind'],
            simulation: args.simulation,
            gui_request: true
        };
        return this.httpClient.post(url, JSON.stringify(params), this.options);
    }
    getAllReports(url, args) {
        const params = JSON.stringify(args);
        return this.httpClient.post(url, params, this.options);
    }
    getBaseFareDetails(url, args) {
        const params = args.params;
        return this.httpClient.get(url + args.url, { params });
    }
    getBidPriceDetails(url, args) {
        const params = args.params;
        return this.httpClient.get(url + args.url, { params });
    }
}
MarketService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MarketService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
MarketService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MarketService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MarketService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL21hcmtldC1zZWFyY2gvbWFya2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFHL0Qsb0NBQW9DO0FBR3BDLE1BQU0sT0FBTyxhQUFhO0lBRXRCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFEbEMsWUFBTyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUN4QyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsTUFBTTtRQUNuQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFxQixHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsSUFBSTtRQUNyQyxNQUFNLE1BQU0sR0FBRztZQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsS0FBSyxDQUFDO1lBQ3BGLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNwQixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBZ0IsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFnQixHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU0sa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzswR0E3QlEsYUFBYTs4R0FBYixhQUFhOzJGQUFiLGFBQWE7a0JBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVW5wdWJsaXNoZWQgd29yayDCqSAyMDE5IERYQyBUZWNobm9sb2d5IENvbXBhbnkuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRnVsbE1hcmtldFJlc3BvbnNlLCBSdWxlUmVwb3J0UmVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2luZGV4Jztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcmV0cnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFya2V0U2VydmljZSB7XG4gICAgcHJpdmF0ZSBvcHRpb25zID0geyBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJykgfTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxuICAgIHB1YmxpYyBnZXRGdWxsTWFya2V0RGV0YWlscyh1cmwsIHBhcmFtcyk6IE9ic2VydmFibGU8RnVsbE1hcmtldFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PEZ1bGxNYXJrZXRSZXNwb25zZT4odXJsLCB7IHBhcmFtcyB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdEN1c3RvbUVkaWZhY3RSZXF1ZXN0KHVybCwgYXJncyk6IE9ic2VydmFibGU8UnVsZVJlcG9ydFJlcz4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBlZGlmYWN0X3Jlc3A6IGFyZ3MuZWRpZmFjdCwgdHJhcHM6IFsnYmZ0JywgJ2JpZCcsICdjb21wc2VhdHMnLCAnYmZhJywgJ3J1bGVzJywnaW5kJ10sXG4gICAgICAgICAgICBzaW11bGF0aW9uOiBhcmdzLnNpbXVsYXRpb24sICAgICAgICAgICAgXG4gICAgICAgICAgICBndWlfcmVxdWVzdDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8UnVsZVJlcG9ydFJlcz4odXJsLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGxSZXBvcnRzKHVybCwgYXJncyk6IE9ic2VydmFibGU8UnVsZVJlcG9ydFJlcz4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBKU09OLnN0cmluZ2lmeShhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PFJ1bGVSZXBvcnRSZXM+KHVybCwgcGFyYW1zLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCYXNlRmFyZURldGFpbHModXJsLCBhcmdzKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGFyZ3MucGFyYW1zO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldCh1cmwgKyBhcmdzLnVybCwgeyBwYXJhbXMgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJpZFByaWNlRGV0YWlscyh1cmwsIGFyZ3MpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gYXJncy5wYXJhbXM7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KHVybCArIGFyZ3MudXJsLCB7cGFyYW1zfSk7XG4gICAgfVxufVxuIl19