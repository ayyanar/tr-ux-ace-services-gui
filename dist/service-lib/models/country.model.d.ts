import { RsStandardPayload } from './rs-payload.model';
export declare class Country {
    addlTxt: string;
    code: string;
    name: string;
}
export declare class CountryRs {
    country: Country[];
    rsStandardPayload: RsStandardPayload;
}
