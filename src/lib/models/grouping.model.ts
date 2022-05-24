/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RqStandardPayload } from './rq-payload.model';
import { RsStandardPayload } from './rs-payload.model';

import { OriginDestination } from './origin-dest.model';

export class GroupCarrier {
    public carrier: string[];
}

export class FlightRange {
    public startFlight: number;
    public endFlight: number;
}

export class GroupFlight {
    public flight: FlightRange[];
}

export class GroupCarrierFlight {
    public flight: GroupCarrierFlightRange[];
}

export class GroupCarrierFlightRange {
    public carrier: string;
    public flight: FlightRange[];
}

export class Location {
    public city: string[];
    public country: string[];
}

export class POS {
    public comparator: string;
    public businessId: string[];
    public carrierOrGds: string[];
    public communicationNumber: string[];
    public country: string[];
    public currency: string[];
    public gdsOaCity: string[];
    public geographicalCity: string[];
    public iataNumber: string[];
    public inHouseCode: string[];
    public originatingSystem: string[];
    public originatorsRequest: string[];
    public posGrouping: number[];
    public pseudoCity: string[];
    public userType: string[];
}

export class Grouping {
    public id: string;
    public gid: number;
    public version: number;
    public status: string;
    public time: string;
    public name: string;
    public type: string;
    public userId: string;
    public keyword: any;
    public carrier: GroupCarrier;
    public flight: GroupFlight;
    public carrierFlight: GroupCarrierFlight;
    public location: Location;
    public market: OriginDestination[];
    public pointOfSale: POS;
    public editable: boolean;
    public grouping: GroupSummaryChild[];
    public grClone: GroupSummaryChild[];
}

export class GroupingRq {
    public rqStandardPayload: RqStandardPayload;
    public grouping: Grouping[];
}

export class GroupingRs {
    public rsStandardPayload: RsStandardPayload;
    public grouping: Grouping[];
}

export class ExportGrouping {
    public id: string;
    public gid: number;
    public version: number;
    public status: string;
    public time: string;
}

export class GroupingExportRq {
    public grouping: ExportGrouping[];
    public rqStandardPayload: RqStandardPayload;
}

export class GroupSummaryParent {
    public id: string;
    public gid: number;
    public version: number;
    public status: string;
    public time: string;
    public name: string;
    public type: string;
    public userId: string;
    public keyword: string[];
    public editable: boolean;
    public grouping: GroupSummaryChild[];
}

export class GroupSummaryChild {
    public id: string;
    public gid: number;
    public version: number;
    public status: string;
    public time: string;
    public name: string;
    public type: string;
    public userId: string;
    public editable: boolean;
    public keyword: string[];
}

export class GroupingDirectoryRs {
    public rsStandardPayload: RsStandardPayload;
    public grouping: GroupSummaryParent[];
}
