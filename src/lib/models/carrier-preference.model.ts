/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RsStandardPayload } from './rs-payload.model';
import { Values } from './values.model';

export class CarrierPreference {
    public name: string;
    public description: string;
    public values: Values[];
}

export class CarrierPreferencesRs {
    public carrierPreference: CarrierPreference[];
    public rsStandardPayload: RsStandardPayload;
}
