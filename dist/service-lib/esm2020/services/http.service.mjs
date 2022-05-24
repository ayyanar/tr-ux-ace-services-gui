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
export class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(url) {
        return this.httpClient.get(url);
    }
    getP(url, params) {
        return this.httpClient.get(url, { params });
    }
    post(url, data) {
        return this.httpClient.post(url, data, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }
    put(url, data) {
        return this.httpClient.put(url, data, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }
    delete(url) {
        return this.httpClient.delete(url);
    }
    downloadBlob(url, data) {
        return this.httpClient.put(url, data, { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'blob' });
    }
    getText(url) {
        return this.httpClient.get(url, {
            responseType: 'text'
        });
    }
    downloadBlobGet(url) {
        return this.httpClient.get(url, {
            responseType: 'arraybuffer', headers: new HttpHeaders()
        });
    }
}
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: HttpService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUEwQixXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRTNFLG9DQUFvQztBQUdwQyxNQUFNLE9BQU8sV0FBVztJQUV4QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUV0QyxHQUFHLENBQUssR0FBVztRQUN4QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxJQUFJLENBQUksR0FBVyxFQUFFLE1BQWtCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sSUFBSSxDQUFJLEdBQVcsRUFBRSxJQUFTO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUksR0FBRyxFQUFFLElBQUksRUFDcEMsRUFBQyxPQUFPLEVBQUUsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFTSxHQUFHLENBQUksR0FBVyxFQUFFLElBQVM7UUFDakMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBSyxHQUFHLEVBQUUsSUFBSSxFQUNwQyxFQUFDLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVNLE1BQU0sQ0FBSSxHQUFXO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUksR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLFlBQVksQ0FBQyxHQUFXLEVBQUUsSUFBUztRQUN6QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQ2xDLEVBQUMsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVztRQUN4QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUM5QixZQUFZLEVBQUUsTUFBTTtTQUFDLENBQ3RCLENBQUM7SUFDSixDQUFDO0lBRU0sZUFBZSxDQUFDLEdBQVc7UUFDaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDOUIsWUFBWSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxXQUFXLEVBQUU7U0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQzs7d0dBekNXLFdBQVc7NEdBQVgsV0FBVzsyRkFBWCxXQUFXO2tCQUR2QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFVucHVibGlzaGVkIHdvcmsgwqkgMjAxOSBEWEMgVGVjaG5vbG9neSBDb21wYW55LlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcmV0cnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xuXG5jb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHt9XG5cbiBwdWJsaWMgZ2V0IDxUPih1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8YW55Pih1cmwpO1xuIH1cblxuIHB1YmxpYyBnZXRQPFQ+KHVybDogc3RyaW5nLCBwYXJhbXM6IEh0dHBQYXJhbXMpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxhbnk+KHVybCwge3BhcmFtc30pO1xuIH1cblxuIHB1YmxpYyBwb3N0PFQ+KHVybDogc3RyaW5nLCBkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8VD4odXJsLCBkYXRhLFxuICAgICAgICB7aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpfSk7XG4gfVxuXG4gcHVibGljIHB1dDxUPih1cmw6IHN0cmluZywgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wdXQgPFQ+KHVybCwgZGF0YSxcbiAgICAgICAge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKX0pO1xuIH1cblxuIHB1YmxpYyBkZWxldGU8VD4odXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmRlbGV0ZTxUPih1cmwpO1xuIH1cblxuIHB1YmxpYyBkb3dubG9hZEJsb2IodXJsOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dCh1cmwsIGRhdGEsXG4gICAge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKSwgcmVzcG9uc2VUeXBlOiAnYmxvYicgfSk7XG4gfVxuXG4gcHVibGljIGdldFRleHQodXJsOiBzdHJpbmcpIHtcbiAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KHVybCwge1xuICAgICByZXNwb25zZVR5cGU6ICd0ZXh0J31cbiAgICk7XG4gfVxuXG4gcHVibGljIGRvd25sb2FkQmxvYkdldCh1cmw6IHN0cmluZykge1xuICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQodXJsLCB7XG4gICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJywgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCl9XG4gICApO1xuIH1cblxufVxuIl19