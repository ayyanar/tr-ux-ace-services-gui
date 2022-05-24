/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RsStandardPayload } from './rs-payload.model';

export class Airline {
    public carrier: string;
    public name: string;
    public typeOfOperations: string;
    public threeLetterCode: string;
    public airlineInd: string;
}

export class AirlineRs {
    public airline: Airline[];
    public rsStandardPayload: RsStandardPayload;
}
