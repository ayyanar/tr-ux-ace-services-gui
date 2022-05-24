import { ConnectionInfo } from './fcb-market.model';
export declare class MarketavailRequestorID {
    type: string;
    ident: string;
    identContext: string;
}
export declare class MarketavailSource {
    agentId?: string;
    agentCode?: string;
    vendorId: string;
    airportCode: string;
    ersp_UserId: string;
    firstDeptPoint?: string;
    country: string;
    currency: string;
    pseudoCityCode?: string;
    terminalID?: string;
    requestorID?: MarketavailRequestorID;
}
export declare class MarketavailCompany {
    companyCode: string;
    companyName: string;
    context: string;
    country: string;
    travelSector: string;
}
export declare class MarketavailBookingChannel {
    type?: string;
    company?: MarketavailCompany;
}
export declare class MarketavailPOS {
    source: MarketavailSource;
    bookingChannel: MarketavailBookingChannel;
}
export declare class MarketavailProcessingInfo {
    requestType: string;
    orderResults: string;
    timeFormat: string;
    firstAvail: string;
    firstAvailRange: number;
    maxTrips: number;
    returnDEIInfo: boolean;
    legDetails: boolean;
    returnRuleUsage: boolean;
    simulation: boolean;
}
export declare class MarketavailSpecificFlight {
    flightNum: string;
}
export declare class MarketavailVendorPref {
    carrier: string;
    allianceAllowed?: string;
    loyaltyAllowed?: string;
}
export declare class MarketavailEquipmentPref {
    aircraftType?: string;
    typeOfEquipment?: string;
}
export declare class MarketavailCabinPref {
    cabin?: string;
    cabinSubtype?: string;
}
export declare class MarketavailTravelPreferences {
    maxStops?: number;
    onTimeRating?: number;
    maxTripDuration?: string;
    awardTravel?: string;
    vendorPref?: MarketavailVendorPref[];
    equipmentPref?: MarketavailEquipmentPref;
    cabinPref?: MarketavailCabinPref;
    bookingClass?: string[];
}
export declare class MarketavailRequest {
    origin: string;
    destination: string;
    departureDate: string;
    departureTime?: string;
    arrivalTime?: string;
    connections: ConnectionInfo;
    specificFlight?: MarketavailSpecificFlight;
    travelPreferences: MarketavailTravelPreferences;
}
export declare class MarketavailMarketAvailRQ {
    pos?: MarketavailPOS;
    processingInfo?: MarketavailProcessingInfo;
    request?: MarketavailRequest;
}
export declare class MarketAvailabilityRequest {
    marketAvailRQ: MarketavailMarketAvailRQ;
}
