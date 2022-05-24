import { RsStandardPayload } from './rs-payload.model';
export declare class Currency {
    code: string;
    countryCode: string;
    decimalPlaces: number;
    name: string;
}
export declare class CurrencyRs {
    currency: Currency[];
    rsStandardPayload: RsStandardPayload;
}
