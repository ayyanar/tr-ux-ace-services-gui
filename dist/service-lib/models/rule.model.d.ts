import { RqStandardPayload } from './rq-payload.model';
import { RsStandardPayload } from './rs-payload.model';
import { OriginDestination } from './origin-dest.model';
export declare class RuleRq {
    rqStandardPayload: RqStandardPayload;
    rule: Rule[];
}
export declare class Rule {
    gid: number;
    type: string;
    name: string;
    quickRule: string;
    status: string;
    time: string;
    userId: string;
    version: number;
    action: Action;
    condition: Condition;
    keyword: string;
    editable: boolean;
    rule?: RuleSummary[];
    ruleClone?: RuleSummary[];
    transaction: string;
}
export declare class Action {
    availabilityAdjustmentActionInput: AvailabilityAdjustmentActionInput;
    bidPriceAdjustmentActionInput: BidPriceActionInput;
    classClosureActionInput: ClassClosureActionInput;
    classSuppressionActionInput: ClassSuppressionActionInput;
    marketFareAdjustmentActionInput: MarketFareActionInput;
    allowPartialCancelationActionInput: AllowPartialCancelationActionInput;
    journeyDataControlActionInput: JourneyDataControlActionInput;
    fcbConnectionOverrideActionInput: FcbConnectionOverrideActionInput;
    fcbDisplayOrderActionInput: FcbDisplayOrderActionInput;
    fcbFlightAndCarrierSuppressionActionInput: FcbFlightAndCarrierSuppressionActionInput;
    fcbIncludeExcludeConnectionsActionInput: FcbIncludeExcludeConnectionsActionInput;
}
export declare class Condition {
    arrivalTimeCondition: DateTimeCondition[];
    carrierCondition: CarrierCondition[];
    classAvailabilityCondition: ClassAvailabilityCondition[];
    classBookingCondition: ClassBookingCondition[];
    classCondition: ClassCondition[];
    connectionPointCondition: ConnectionPointCondition[];
    departureDateCondition: DateTimeCondition[];
    departureTimeCondition: DateTimeCondition[];
    effectiveDateTimeCondition: DateTimeCondition[];
    equipmentCondition: EquipmentCondition[];
    flightCondition: FlightCondition[];
    carrierFlightCondition: CarrierFlightCondition[];
    passengerLoyaltyCondition: PassengerLoyaltyCondition[];
    loadFactorCondition: LoadFactorCondition[];
    marketCondition: MarketCondition[];
    pointOfCommencementCondition: PointOfCommencementCondition[];
    pointOfSaleCondition: PointOfSaleCondition[];
    routingCondition: RoutingCondition[];
    sellingDateTimeCondition: DateTimeCondition[];
    timeOutsideDepartureCondition: TimeDepartureCondition[];
    timeToDepartureCondition: TimeDepartureCondition[];
}
export declare class AvailabilityAdjustmentActionInput {
    changeAmount: number;
    changePercent: number;
    maximum: number;
    maximumIncrease: number;
    minimum: number;
    overrideSegmentLimit: boolean;
    useAuAvailability: boolean;
}
export declare class BidPriceActionInput {
    bidPrice: number;
    changeAmount: number;
    changePercent: number;
    maximum: number;
    minimum: number;
    categories: Categories;
    seats: BidPriceSeat[];
    cabin: string[];
    adjustLeg: boolean;
}
export declare class Categories {
    all: boolean;
    connection: boolean;
    local: boolean;
    reward: boolean;
    opaque: boolean;
}
export declare class BidPriceSeat {
    endSeat: string;
    startSeat: string;
    seatsRestriction: string;
}
export declare class ClassClosureActionInput {
    waitlistClose: boolean;
}
export declare class ClassSuppressionActionInput {
}
export declare class AllowPartialCancelationActionInput {
}
export declare class JourneyDataControlActionInput {
}
export declare class MarketFareActionInput {
    amount: number;
    changeAmount: number;
    changePercent: number;
    maximum: number;
    minimum: number;
    adjustLeg: boolean;
}
export declare class DateTimeCondition {
    comparator: string;
    dateOrRange: DateOrRange;
    dayOfWeek: any[];
}
export declare class DateOrRange {
    endDateTime: string;
    startDateTime: string;
}
export declare class CarrierCondition {
    comparator: string;
    marketing: string[];
    operating: string[];
    marketingGrouping: number[];
    operatingGrouping: number[];
}
export declare class ClassCondition {
    comparator: string;
    cabin: any;
    classOfService: any;
}
export declare class ClassBookingCondition extends ClassCondition {
    seats: Seat;
}
export declare class ClassAvailabilityCondition extends ClassCondition {
    seats: Seat;
}
export declare class Seat {
    seatComparator: string;
    count: number;
    segment: OriginDestination[];
}
export declare class ConnectionPointCondition {
    comparator: string;
    inSequence: boolean;
    connectionCity: ConnectionCity[];
}
export declare class ConnectionCity {
    airports: ConnectionCityAirport;
    time: TimeConnectionCity;
}
export declare class ConnectionCityAirport {
    arrival: string;
    departure: string;
}
export declare class TimeConnectionCity {
    maximumMinutes: number;
    minimumMinutes: number;
}
export declare class EquipmentCondition {
    comparator: string;
    configCode: string[];
    iataCode: string[];
}
export declare class FlightCondition {
    comparator: string;
    flight: Flight[];
    flightGrouping: number[];
}
export declare class CarrierFlightCondition {
    comparator: string;
    flight: CarrierFlight[];
    flightGrouping: number[];
}
export declare class CarrierFlight {
    carrier: string;
    flight: Flight[];
}
export declare class Flight {
    startFlight: string;
    endFlight: string;
}
export declare class PassengerLoyaltyCondition {
    comparator: string;
    passengerLoyalty: PassengerLoyalty[];
}
export declare class PassengerLoyalty {
    carrier: string;
    tier: number;
}
export declare class LoadFactorCondition {
    comparator: string;
    startPercent: number;
    endPercent: number;
    cabin: string[];
    leg: OriginDestination[];
}
export declare class MarketCondition {
    comparator: string;
    market: Market[];
    segment: OriginDestination[];
}
export declare class Market {
    marketGrouping: number[];
    bidirectionalGrouping: boolean;
    market: OriginDestination[];
}
export declare class PointOfCommencementCondition {
    comparator: string;
    city: string[];
    cityGrouping: number[];
}
export declare class PointOfSaleCondition {
    comparator: string;
    businessId: any;
    carrierOrGds: any;
    communicationNumber: any;
    country: any;
    currency: any;
    originatingSystem: any;
    gdsOaCity: any;
    geographicalCity: any;
    iataNumber: any;
    originatorsRequest: any;
    posGrouping: number[];
    pseudoCity: any;
    inHouseCode: any;
    userType: any;
}
export declare class RoutingCondition {
    comparator: string;
    routing: Routing;
}
export declare class Routing {
    connectType: string;
    direct: boolean;
    nonStop: boolean;
    domestic: boolean;
    connectionCount: number[];
    carrier: string[];
    carrierGrouping: number[];
}
export declare class TimeDepartureCondition {
    comparator: string;
    time: Time;
}
export declare class Time {
    days: number;
    hours: number;
    minutes: number;
}
export declare class RuleRs {
    rsStandardPayload: RsStandardPayload;
    rule: Rule[];
    ruleSummary: RuleSummary[];
}
export declare class RuleSummary {
    gid: number;
    name: string;
    quickRule: string;
    status: string;
    time: string;
    type: string;
    userId: string;
    version: number;
    keyword: any;
    editable: boolean;
    rule?: ChildRule[];
}
export declare class ChildRule {
    gid: number;
    name: string;
    quickRule: string;
    status: string;
    time: string;
    type: string;
    userId: string;
    version: number;
    editable: boolean;
    keyword: any;
}
export declare class TypeOfSegment {
    all: boolean;
    host: boolean;
    hostMarketed: boolean;
    oa: boolean;
    hostOperated: boolean;
    carrier: string[];
    carrierGroup: number[];
}
export declare class DisplayOrderAction {
    typeOfService: string;
    typeOfSegment: TypeOfSegment[];
    flight: CarrierFlight[];
}
export declare class FcbDisplayOrderActionInput {
    sortOption: string;
    displayOrderAction: DisplayOrderAction[];
    typeOfRule: string;
}
export declare class FcbIncludeExcludeConnectionsActionInput {
    exclude: boolean;
}
export declare class FcbConnectionOverrideActionInput {
}
export declare class FcbFlightAndCarrierSuppressionActionInput {
}
export declare class SsimSummary {
    carrier: string;
    flightNo: string;
    Pattern?: Pattern[];
}
export declare class Pattern {
    patternNo: string;
    effectDate: string;
    disDate: string;
    frequency: string;
}
