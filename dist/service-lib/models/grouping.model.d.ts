import { RqStandardPayload } from './rq-payload.model';
import { RsStandardPayload } from './rs-payload.model';
import { OriginDestination } from './origin-dest.model';
export declare class GroupCarrier {
    carrier: string[];
}
export declare class FlightRange {
    startFlight: number;
    endFlight: number;
}
export declare class GroupFlight {
    flight: FlightRange[];
}
export declare class GroupCarrierFlight {
    flight: GroupCarrierFlightRange[];
}
export declare class GroupCarrierFlightRange {
    carrier: string;
    flight: FlightRange[];
}
export declare class Location {
    city: string[];
    country: string[];
}
export declare class POS {
    comparator: string;
    businessId: string[];
    carrierOrGds: string[];
    communicationNumber: string[];
    country: string[];
    currency: string[];
    gdsOaCity: string[];
    geographicalCity: string[];
    iataNumber: string[];
    inHouseCode: string[];
    originatingSystem: string[];
    originatorsRequest: string[];
    posGrouping: number[];
    pseudoCity: string[];
    userType: string[];
}
export declare class Grouping {
    id: string;
    gid: number;
    version: number;
    status: string;
    time: string;
    name: string;
    type: string;
    userId: string;
    keyword: any;
    carrier: GroupCarrier;
    flight: GroupFlight;
    carrierFlight: GroupCarrierFlight;
    location: Location;
    market: OriginDestination[];
    pointOfSale: POS;
    editable: boolean;
    grouping: GroupSummaryChild[];
    grClone: GroupSummaryChild[];
}
export declare class GroupingRq {
    rqStandardPayload: RqStandardPayload;
    grouping: Grouping[];
}
export declare class GroupingRs {
    rsStandardPayload: RsStandardPayload;
    grouping: Grouping[];
}
export declare class ExportGrouping {
    id: string;
    gid: number;
    version: number;
    status: string;
    time: string;
}
export declare class GroupingExportRq {
    grouping: ExportGrouping[];
    rqStandardPayload: RqStandardPayload;
}
export declare class GroupSummaryParent {
    id: string;
    gid: number;
    version: number;
    status: string;
    time: string;
    name: string;
    type: string;
    userId: string;
    keyword: string[];
    editable: boolean;
    grouping: GroupSummaryChild[];
}
export declare class GroupSummaryChild {
    id: string;
    gid: number;
    version: number;
    status: string;
    time: string;
    name: string;
    type: string;
    userId: string;
    editable: boolean;
    keyword: string[];
}
export declare class GroupingDirectoryRs {
    rsStandardPayload: RsStandardPayload;
    grouping: GroupSummaryParent[];
}
