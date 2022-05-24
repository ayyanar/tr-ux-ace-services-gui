/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RsStandardPayload } from './rs-payload.model';

export class Country {
    public addlTxt: string;
    public code: string;
    public name: string;
}

export class CountryRs {
    public country: Country[];
    public rsStandardPayload: RsStandardPayload;
}
