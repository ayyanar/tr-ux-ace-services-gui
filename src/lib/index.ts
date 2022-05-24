/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

export * from './services';
export * from './models';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MarketService } from './services/market-search/market.service';

@NgModule({
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
  })

export class ServicesModule {}
