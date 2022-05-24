import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MarketService } from './services/market-search/market.service';
import * as i0 from "@angular/core";
/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
export * from './services';
export * from './models';
export class ServicesModule {
}
ServicesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ServicesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ServicesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ServicesModule, imports: [CommonModule,
        HttpClientModule], exports: [HttpClientModule] });
ServicesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ServicesModule, providers: [
        MarketService
    ], imports: [[
            CommonModule,
            HttpClientModule
        ], HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ServicesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    declarations: [],
                    exports: [
                        HttpClientModule
                    ],
                    providers: [
                        MarketService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFieEU7Ozs7R0FJRztBQUVILGNBQWMsWUFBWSxDQUFDO0FBQzNCLGNBQWMsVUFBVSxDQUFDO0FBc0J6QixNQUFNLE9BQU8sY0FBYzs7MkdBQWQsY0FBYzs0R0FBZCxjQUFjLFlBWnJCLFlBQVk7UUFDWixnQkFBZ0IsYUFJaEIsZ0JBQWdCOzRHQU9ULGNBQWMsYUFMWjtRQUNULGFBQWE7S0FDZCxZQVZRO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtTQUNqQixFQUdDLGdCQUFnQjsyRkFPVCxjQUFjO2tCQWQxQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxhQUFhO3FCQUNkO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFVucHVibGlzaGVkIHdvcmsgwqkgMjAxOSBEWEMgVGVjaG5vbG9neSBDb21wYW55LlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWxzJztcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNYXJrZXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYXJrZXQtc2VhcmNoL21hcmtldC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBIdHRwQ2xpZW50TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgTWFya2V0U2VydmljZVxuICAgIF1cbiAgfSlcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHt9XG4iXX0=