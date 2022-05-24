import { RsStandardPayload } from './rs-payload.model';
export declare class CityAirport {
    airport: string;
    city: string;
    code: string;
    country: string;
    timeZone: string;
}
export declare class CityAirportRs {
    cityAirport: CityAirport[];
    rsStandardPayload: RsStandardPayload;
}
