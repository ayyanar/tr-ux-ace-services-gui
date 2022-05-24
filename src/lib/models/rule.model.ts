/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RqStandardPayload } from './rq-payload.model';
import { RsStandardPayload } from './rs-payload.model';
import { OriginDestination } from './origin-dest.model';

export class RuleRq {
  public rqStandardPayload: RqStandardPayload;
  public rule: Rule[];
}

export class Rule {
  public gid: number;
  public type: string;
  public name: string;
  public quickRule: string;
  public status: string;
  public time: string;
  public userId: string;
  public version: number;
  public action: Action;
  public condition: Condition;
  public keyword: string;
  public editable: boolean;
  public rule?: RuleSummary[];
  public ruleClone?: RuleSummary[];
  public transaction: string;
}

export class Action {
  public availabilityAdjustmentActionInput: AvailabilityAdjustmentActionInput;
  public bidPriceAdjustmentActionInput: BidPriceActionInput;
  public classClosureActionInput: ClassClosureActionInput;
  public classSuppressionActionInput: ClassSuppressionActionInput;
  public marketFareAdjustmentActionInput: MarketFareActionInput;
  public allowPartialCancelationActionInput: AllowPartialCancelationActionInput;
  public journeyDataControlActionInput: JourneyDataControlActionInput;
  public fcbConnectionOverrideActionInput: FcbConnectionOverrideActionInput;
  public fcbDisplayOrderActionInput: FcbDisplayOrderActionInput;
  public fcbFlightAndCarrierSuppressionActionInput: FcbFlightAndCarrierSuppressionActionInput;
  public fcbIncludeExcludeConnectionsActionInput: FcbIncludeExcludeConnectionsActionInput;
}

export class Condition {
  public arrivalTimeCondition: DateTimeCondition[];
  public carrierCondition: CarrierCondition[];
  public classAvailabilityCondition: ClassAvailabilityCondition[];
  public classBookingCondition: ClassBookingCondition[];
  public classCondition: ClassCondition[];
  public connectionPointCondition: ConnectionPointCondition[];
  public departureDateCondition: DateTimeCondition[];
  public departureTimeCondition: DateTimeCondition[];
  public effectiveDateTimeCondition: DateTimeCondition[];
  public equipmentCondition: EquipmentCondition[];
  public flightCondition: FlightCondition[];
  public carrierFlightCondition: CarrierFlightCondition[];
  public passengerLoyaltyCondition: PassengerLoyaltyCondition[];
  public loadFactorCondition: LoadFactorCondition[];
  public marketCondition: MarketCondition[];
  public pointOfCommencementCondition: PointOfCommencementCondition[];
  public pointOfSaleCondition: PointOfSaleCondition[];
  public routingCondition: RoutingCondition[];
  public sellingDateTimeCondition: DateTimeCondition[];
  public timeOutsideDepartureCondition: TimeDepartureCondition[];
  public timeToDepartureCondition: TimeDepartureCondition[];
}

export class AvailabilityAdjustmentActionInput {
  public changeAmount: number;
  public changePercent: number;
  public maximum: number;
  public maximumIncrease: number;
  public minimum: number;
  public overrideSegmentLimit: boolean;
  public useAuAvailability: boolean;
}

export class BidPriceActionInput {
  public bidPrice: number;
  public changeAmount: number;
  public changePercent: number;
  public maximum: number;
  public minimum: number;
  public categories: Categories;
  public seats: BidPriceSeat[];
  public cabin: string[];
  public adjustLeg: boolean;
}

export class Categories {
  public all: boolean;
  public connection: boolean;
  public local: boolean;
  public reward: boolean;
  public opaque: boolean;
}

export class BidPriceSeat {
  public endSeat: string;
  public startSeat: string;
  public seatsRestriction: string;
}

export class ClassClosureActionInput {
  public waitlistClose: boolean;
}

export class ClassSuppressionActionInput {
  // public display: boolean;
}

export class AllowPartialCancelationActionInput {
  // public display: boolean;
}

export class JourneyDataControlActionInput {
  // public display: boolean;
}

export class MarketFareActionInput {
  public amount: number;
  public changeAmount: number;
  public changePercent: number;
  public maximum: number;
  public minimum: number;
  public adjustLeg: boolean;
}

export class DateTimeCondition {
  public comparator: string;
  public dateOrRange: DateOrRange;
  public dayOfWeek: any[];
}

export class DateOrRange {
  public endDateTime: string;
  public startDateTime: string;
}

export class CarrierCondition {
  public comparator: string;
  public marketing: string[];
  public operating: string[];
  public marketingGrouping: number[];
  public operatingGrouping: number[];
}

export class ClassCondition {
  public comparator: string;
  public cabin: any;
  public classOfService: any;
}

export class ClassBookingCondition extends ClassCondition {
  public seats: Seat;
}

export class ClassAvailabilityCondition extends ClassCondition {
  public seats: Seat;
}

export class Seat {
  public seatComparator: string;
  public count: number;
  public segment: OriginDestination[];
}

export class ConnectionPointCondition {
  public comparator: string;
  public inSequence: boolean;
  public connectionCity: ConnectionCity[];
}

export class ConnectionCity {
  public airports: ConnectionCityAirport;
  public time: TimeConnectionCity;
}

export class ConnectionCityAirport {
  public arrival: string;
  public departure: string;
}

export class TimeConnectionCity {
  public maximumMinutes: number;
  public minimumMinutes: number;
}

export class EquipmentCondition {
  public comparator: string;
  public configCode: string[];
  public iataCode: string[];
}

export class FlightCondition {
  public comparator: string;
  public flight: Flight[];
  public flightGrouping: number[];
}

export class CarrierFlightCondition {
  public comparator: string;
  public flight: CarrierFlight[];
  public flightGrouping: number[];
}

export class CarrierFlight {
  public carrier: string;
  public flight: Flight[];
}

export class Flight {
  public startFlight: string;
  public endFlight: string;
}

export class PassengerLoyaltyCondition {
  public comparator: string;
  public passengerLoyalty: PassengerLoyalty[];
}

export class PassengerLoyalty {
  public carrier: string;
  public tier: number;
}

export class LoadFactorCondition {
  public comparator: string;
  public startPercent: number;
  public endPercent: number;
  public cabin: string[];
  public leg: OriginDestination[];
}

export class MarketCondition {
  public comparator: string;
  public market: Market[];
  public segment: OriginDestination[];
}

export class Market {
  public marketGrouping: number[];
  public bidirectionalGrouping: boolean;
  public market: OriginDestination[];
}

export class PointOfCommencementCondition {
  public comparator: string;
  public city: string[];
  public cityGrouping: number[];
}

export class PointOfSaleCondition {
  public comparator: string;
  public businessId: any;
  public carrierOrGds: any;
  public communicationNumber: any;
  public country: any;
  public currency: any;
  public originatingSystem: any;
  public gdsOaCity: any;
  public geographicalCity: any;
  public iataNumber: any;
  public originatorsRequest: any;
  public posGrouping: number[];
  public pseudoCity: any;
  public inHouseCode: any;
  public userType: any;
}

export class RoutingCondition {
  public comparator: string;
  public routing: Routing;
}

export class Routing {
  public connectType: string;
  public direct: boolean;
  public nonStop: boolean;
  public domestic: boolean;
  public connectionCount: number[];
  public carrier: string[];
  public carrierGrouping: number[];
}

export class TimeDepartureCondition {
  public comparator: string;
  public time: Time;
}

export class Time {
  public days: number;
  public hours: number;
  public minutes: number;
}

export class RuleRs {
  public rsStandardPayload: RsStandardPayload;
  public rule: Rule[];
  public ruleSummary: RuleSummary[];
}

export class RuleSummary {
  public gid: number;
  public name: string;
  public quickRule: string;
  public status: string;
  public time: string;
  public type: string;
  public userId: string;
  public version: number;
  public keyword: any;
  public editable: boolean;
  public rule?: ChildRule[];
}

export class ChildRule {
  public gid: number;
  public name: string;
  public quickRule: string;
  public status: string;
  public time: string;
  public type: string;
  public userId: string;
  public version: number;
  public editable: boolean;
  public keyword: any;
}

// fcb

export class TypeOfSegment {
  public all: boolean;
  public host: boolean;
  public hostMarketed: boolean;
  public oa: boolean;
  public hostOperated: boolean;
  public carrier: string[];
  public carrierGroup: number[];
}

export class DisplayOrderAction {
  public typeOfService: string;
  public typeOfSegment: TypeOfSegment[];
  public flight: CarrierFlight[];
}

export class FcbDisplayOrderActionInput {
  public sortOption: string;
  public displayOrderAction: DisplayOrderAction[];
  public typeOfRule: string;
}

export class FcbIncludeExcludeConnectionsActionInput {
  public exclude: boolean;
}

export class FcbConnectionOverrideActionInput {
  // temp class
}
export class FcbFlightAndCarrierSuppressionActionInput {
  // temp class
}
export declare class SsimSummary {
   public carrier: string;
   public flightNo: string;
   public Pattern?: Pattern[];
}

// tslint:disable-next-line:max-classes-per-file
export declare class Pattern {
    public patternNo: string;
    public effectDate: string;
    public disDate: string;
    public frequency: string;
}
