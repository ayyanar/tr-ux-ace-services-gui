import { RsStandardPayload } from './rs-payload.model';
import { Values } from './values.model';
export declare class CarrierPreference {
    name: string;
    description: string;
    values: Values[];
}
export declare class CarrierPreferencesRs {
    carrierPreference: CarrierPreference[];
    rsStandardPayload: RsStandardPayload;
}
