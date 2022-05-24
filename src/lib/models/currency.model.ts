/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RsStandardPayload } from './rs-payload.model';

export class Currency {
    public code: string;
    public countryCode: string;
    public decimalPlaces: number;
    public name: string;
}

export class CurrencyRs {
    public currency: Currency[];
    public rsStandardPayload: RsStandardPayload;
}
