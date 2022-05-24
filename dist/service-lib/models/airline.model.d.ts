import { RsStandardPayload } from './rs-payload.model';
export declare class Airline {
    carrier: string;
    name: string;
    typeOfOperations: string;
    threeLetterCode: string;
    airlineInd: string;
}
export declare class AirlineRs {
    airline: Airline[];
    rsStandardPayload: RsStandardPayload;
}
