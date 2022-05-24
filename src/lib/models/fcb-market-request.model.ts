/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { ConnectionInfo } from './fcb-market.model';
export class MarketavailRequestorID {
    public type: string;
    public ident: string;
    public identContext: string;
}
export class MarketavailSource {
    public agentId?: string;
    public agentCode?: string;
    public vendorId: string;
    public airportCode: string;
    // tslint:disable-next-line:variable-name
    public ersp_UserId: string;
    public firstDeptPoint?: string;
    public country: string;
    public currency: string;
    public pseudoCityCode?: string;
    public terminalID?: string;
    public requestorID?: MarketavailRequestorID;
}
export class MarketavailCompany {
    public companyCode: string;
    public companyName: string;
    public context: string;
    public country: string;
    public travelSector: string;
}
export class MarketavailBookingChannel {
    public type?: string;
    public company?: MarketavailCompany;
}
export class MarketavailPOS {
    public source: MarketavailSource;
    public bookingChannel: MarketavailBookingChannel;
}
export class MarketavailProcessingInfo {
    public requestType: string;
    public orderResults: string;
    public timeFormat: string;
    public firstAvail: string;
    public firstAvailRange: number;
    public maxTrips: number;
    // tslint:disable-next-line:variable-name
    public returnDEIInfo: boolean;
    public legDetails: boolean;
    public returnRuleUsage: boolean;
    public simulation: boolean;
}
export class MarketavailSpecificFlight {
    public flightNum: string;
}
export class MarketavailVendorPref {
    public carrier: string;
    public allianceAllowed?: string;
    public loyaltyAllowed?: string;
}
export class MarketavailEquipmentPref {
    public aircraftType?: string;
    public typeOfEquipment?: string;
}
export class MarketavailCabinPref {
    public cabin?: string;
    public cabinSubtype?: string;
}
export class MarketavailTravelPreferences {
    public maxStops?: number;
    public onTimeRating?: number;
    public maxTripDuration?: string;
    public awardTravel?: string;
    public vendorPref?: MarketavailVendorPref[];
    public equipmentPref?: MarketavailEquipmentPref;
    public cabinPref?: MarketavailCabinPref;
    public bookingClass?: string[];
}
export class MarketavailRequest {
    public origin: string;
    public destination: string;
    public departureDate: string;
    public departureTime?: string;
    public arrivalTime?: string;
    public connections: ConnectionInfo;
    public specificFlight?: MarketavailSpecificFlight;
    public travelPreferences: MarketavailTravelPreferences;
}
export class MarketavailMarketAvailRQ {
    public pos?: MarketavailPOS;
    public processingInfo?: MarketavailProcessingInfo;
    public request?: MarketavailRequest;
}
export class MarketAvailabilityRequest {
    public marketAvailRQ: MarketavailMarketAvailRQ;
}
