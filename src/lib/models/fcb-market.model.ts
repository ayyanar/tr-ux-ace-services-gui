/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

export class MarketAvailWarning {
    public type: string;
    public code: string;
}

export class MarketAvailWarnings {
    public warning: MarketAvailWarning;
}

export class SegmentOptions {
    public nonStop: string;
    public direct: string;
    public singleConx: string;
    public doubleConx: string;
}

export class ConnectionInput {
    public locationCode: string;
    public minConxTime: number;
    public maxConxTime: number;
    public codeContext: string;
}

export class Double {
    public firstConx: ConnectionInput;
    public secondConx: ConnectionInput;
}

export class Triple {
    public firstConx: ConnectionInput;
    public secondConx: ConnectionInput;
    public thirdConx: ConnectionInput;
}

export class Quadruple {
    public firstConx: ConnectionInput;
    public secondConx: ConnectionInput;
    public thirdConx: ConnectionInput;
    public fourthConx: ConnectionInput;
}

export class ConnectionCities {
    public single: ConnectionInput[];
    public double: Double[];
    public triple?: Triple;
    public quadruple?: Quadruple;
}

export class ConnectionInfo {
    public onlineConxOnly: string;
    public stopOverOnly: string;
    public minimumConnTime: string;
    public maximumConnTime: string;
    public segmentOptions: SegmentOptions;
    public connectionCities: ConnectionCities;
}

export class MarketAvailOperatingAirline {
    public carrierCode: string;
    public flightNum: number;
    public flightNumSuffix: string;
}

export class MarketAvailCabin {
    public cabinType: string;
    public refID: number;
}

export class BookingClass {
    public classCode: string;
    public cabinRefID: number;
    public mealCode: string;
}

export class LocationCode {
    public locationCode: string;
    public terminal: string;
}

export class DEI {
    public origin: string;
    public destination: string;
    public code: string;
    public text: string;
}

export class LegInfo {
    public carrierCode: string;
    public flightNum: string;
    public flightNumSuffix: string;
    public departDateTime: Date;
    public arrivalDateTime: Date;
    public enrouteTime: string;
    public onTimeRating: number;
    public dateChange: number;
    public codeshare: string;
    public trafficRestrictionCode: string;
    public trafficRestrictionText: string;
    public deiTrafficRestrictionCode: string;
    public deiTrafficRestrictionText: string;
    public departureAirport: LocationCode;
    public arrivalAirport: LocationCode;
    public equipment: string;
    public operatingAirline: MarketAvailOperatingAirline;
    public cabin: MarketAvailCabin[];
    public deis: DEI[];
    public bookingClass: BookingClass[];
}

export class MarketAvailFlightSegment extends LegInfo {
    public legInfo: LegInfo[];
}

export class OrigAndDestSolution {
    public flightSegment: MarketAvailFlightSegment[];
    public dateChangeNbr: number;
    public totalEnrouteTime: string;
}

export class OrigAndDestInfo {
    public origin: string;
    public destination: string;
    public departureDate: string;
    public departTime: string;
    public arrivalTime: string;
    public connectionInfo: ConnectionInfo;
    public origAndDestSolutions: OrigAndDestSolution[];
}

export class MarketAvailRule {
    public gid: number;
    public version: number;
    public execStatus: number;
}

export class MarketAvailRuleSet {
    public class: string;
    public segOrigin: string;
    public segDestination: string;
    public separtureDate: string;
    public rule: MarketAvailRule[];
}

export class RuleType {
    public segOrigin: string;
    public segDestination: string;
    public flightNumber: string;
    public departureDate: string;
    public ruleSet: MarketAvailRuleSet[];
}

export class MarketAvailOd {
    public sequenceNumber: string;
    public origin: string;
    public destination: string;
    public departureDate: string;
    public connectionOverride: RuleType[];
    public displayOrder: RuleType[];
    public flightAndCarrierSuppression: RuleType[];
    public includeExcludeConnections: RuleType[];
}

export class RuleConset {
    public id: string;
    public gid: number;
    public version: number;
    public status: string;
    public time: string;
    public name: string;
    public type: string;
    public userId: string;
    public order: number;
}

export class MarketAvailRuleSetDetails {
    public connectionOverride: RuleConset[];
    public displayOrder: RuleConset[];
    public flightAndCarrierSuppression: RuleConset[];
    public includeExcludeConnections: RuleConset[];
}

export class MarketAvailRules {
    public od: MarketAvailOd[];
    public ruleSetDetails: MarketAvailRuleSetDetails;
}

export class MarketAvailError {
    public type: string;
    public errorCode: number;
}

export class MarketAvailErrors {
    public error: MarketAvailError;
}

export class MarketAvailResponse {
    public timeStamp: Date;
    public success: string;
    public warnings: MarketAvailWarning;
    public origAndDestInfo: OrigAndDestInfo;
    public rules: MarketAvailRules;
    public errors: MarketAvailErrors;
}

export class RuleReport {
    public ruleType: string;
    public values: ValueArray[];
}

export class ValueArray {
    public Executed: string;
    public gid: number;
    public name: string;
    public order: number;
    public status: string;
    public time: string;
    public type: string;
    public userId: string;
    public version: number;
}
