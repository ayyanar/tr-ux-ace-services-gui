/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RsStandardPayload } from './rs-payload.model';

export class CityAirport {
    public airport: string;
    public city: string;
    public code: string;
    public country: string;
    public timeZone: string;
}

export class CityAirportRs {
    public cityAirport: CityAirport[];
    public rsStandardPayload: RsStandardPayload;
}
