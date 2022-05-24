export declare class MarketAvailWarning {
    type: string;
    code: string;
}
export declare class MarketAvailWarnings {
    warning: MarketAvailWarning;
}
export declare class SegmentOptions {
    nonStop: string;
    direct: string;
    singleConx: string;
    doubleConx: string;
}
export declare class ConnectionInput {
    locationCode: string;
    minConxTime: number;
    maxConxTime: number;
    codeContext: string;
}
export declare class Double {
    firstConx: ConnectionInput;
    secondConx: ConnectionInput;
}
export declare class Triple {
    firstConx: ConnectionInput;
    secondConx: ConnectionInput;
    thirdConx: ConnectionInput;
}
export declare class Quadruple {
    firstConx: ConnectionInput;
    secondConx: ConnectionInput;
    thirdConx: ConnectionInput;
    fourthConx: ConnectionInput;
}
export declare class ConnectionCities {
    single: ConnectionInput[];
    double: Double[];
    triple?: Triple;
    quadruple?: Quadruple;
}
export declare class ConnectionInfo {
    onlineConxOnly: string;
    stopOverOnly: string;
    minimumConnTime: string;
    maximumConnTime: string;
    segmentOptions: SegmentOptions;
    connectionCities: ConnectionCities;
}
export declare class MarketAvailOperatingAirline {
    carrierCode: string;
    flightNum: number;
    flightNumSuffix: string;
}
export declare class MarketAvailCabin {
    cabinType: string;
    refID: number;
}
export declare class BookingClass {
    classCode: string;
    cabinRefID: number;
    mealCode: string;
}
export declare class LocationCode {
    locationCode: string;
    terminal: string;
}
export declare class DEI {
    origin: string;
    destination: string;
    code: string;
    text: string;
}
export declare class LegInfo {
    carrierCode: string;
    flightNum: string;
    flightNumSuffix: string;
    departDateTime: Date;
    arrivalDateTime: Date;
    enrouteTime: string;
    onTimeRating: number;
    dateChange: number;
    codeshare: string;
    trafficRestrictionCode: string;
    trafficRestrictionText: string;
    deiTrafficRestrictionCode: string;
    deiTrafficRestrictionText: string;
    departureAirport: LocationCode;
    arrivalAirport: LocationCode;
    equipment: string;
    operatingAirline: MarketAvailOperatingAirline;
    cabin: MarketAvailCabin[];
    deis: DEI[];
    bookingClass: BookingClass[];
}
export declare class MarketAvailFlightSegment extends LegInfo {
    legInfo: LegInfo[];
}
export declare class OrigAndDestSolution {
    flightSegment: MarketAvailFlightSegment[];
    dateChangeNbr: number;
    totalEnrouteTime: string;
}
export declare class OrigAndDestInfo {
    origin: string;
    destination: string;
    departureDate: string;
    departTime: string;
    arrivalTime: string;
    connectionInfo: ConnectionInfo;
    origAndDestSolutions: OrigAndDestSolution[];
}
export declare class MarketAvailRule {
    gid: number;
    version: number;
    execStatus: number;
}
export declare class MarketAvailRuleSet {
    class: string;
    segOrigin: string;
    segDestination: string;
    separtureDate: string;
    rule: MarketAvailRule[];
}
export declare class RuleType {
    segOrigin: string;
    segDestination: string;
    flightNumber: string;
    departureDate: string;
    ruleSet: MarketAvailRuleSet[];
}
export declare class MarketAvailOd {
    sequenceNumber: string;
    origin: string;
    destination: string;
    departureDate: string;
    connectionOverride: RuleType[];
    displayOrder: RuleType[];
    flightAndCarrierSuppression: RuleType[];
    includeExcludeConnections: RuleType[];
}
export declare class RuleConset {
    id: string;
    gid: number;
    version: number;
    status: string;
    time: string;
    name: string;
    type: string;
    userId: string;
    order: number;
}
export declare class MarketAvailRuleSetDetails {
    connectionOverride: RuleConset[];
    displayOrder: RuleConset[];
    flightAndCarrierSuppression: RuleConset[];
    includeExcludeConnections: RuleConset[];
}
export declare class MarketAvailRules {
    od: MarketAvailOd[];
    ruleSetDetails: MarketAvailRuleSetDetails;
}
export declare class MarketAvailError {
    type: string;
    errorCode: number;
}
export declare class MarketAvailErrors {
    error: MarketAvailError;
}
export declare class MarketAvailResponse {
    timeStamp: Date;
    success: string;
    warnings: MarketAvailWarning;
    origAndDestInfo: OrigAndDestInfo;
    rules: MarketAvailRules;
    errors: MarketAvailErrors;
}
export declare class RuleReport {
    ruleType: string;
    values: ValueArray[];
}
export declare class ValueArray {
    Executed: string;
    gid: number;
    name: string;
    order: number;
    status: string;
    time: string;
    type: string;
    userId: string;
    version: number;
}
