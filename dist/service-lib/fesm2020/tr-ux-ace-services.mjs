import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
// import 'rxjs/add/operator/retry';
class MarketService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    }
    getFullMarketDetails(url, params) {
        return this.httpClient.get(url, { params });
    }
    postCustomEdifactRequest(url, args) {
        const params = {
            edifact_resp: args.edifact, traps: ['bft', 'bid', 'compseats', 'bfa', 'rules', 'ind'],
            simulation: args.simulation,
            gui_request: true
        };
        return this.httpClient.post(url, JSON.stringify(params), this.options);
    }
    getAllReports(url, args) {
        const params = JSON.stringify(args);
        return this.httpClient.post(url, params, this.options);
    }
    getBaseFareDetails(url, args) {
        const params = args.params;
        return this.httpClient.get(url + args.url, { params });
    }
    getBidPriceDetails(url, args) {
        const params = args.params;
        return this.httpClient.get(url + args.url, { params });
    }
}
MarketService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MarketService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
MarketService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MarketService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MarketService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
// import 'rxjs/add/operator/retry';
class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(url) {
        return this.httpClient.get(url);
    }
    getP(url, params) {
        return this.httpClient.get(url, { params });
    }
    post(url, data) {
        return this.httpClient.post(url, data, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }
    put(url, data) {
        return this.httpClient.put(url, data, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }
    delete(url) {
        return this.httpClient.delete(url);
    }
    downloadBlob(url, data) {
        return this.httpClient.put(url, data, { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'blob' });
    }
    getText(url) {
        return this.httpClient.get(url, {
            responseType: 'text'
        });
    }
    downloadBlobGet(url) {
        return this.httpClient.get(url, {
            responseType: 'arraybuffer', headers: new HttpHeaders()
        });
    }
}
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: HttpService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class RuleRq {
}
class Rule {
}
class Action {
}
class Condition {
}
class AvailabilityAdjustmentActionInput {
}
class BidPriceActionInput {
}
class Categories {
}
class BidPriceSeat {
}
class ClassClosureActionInput {
}
class ClassSuppressionActionInput {
}
class AllowPartialCancelationActionInput {
}
class JourneyDataControlActionInput {
}
class MarketFareActionInput {
}
class DateTimeCondition {
}
class DateOrRange {
}
class CarrierCondition {
}
class ClassCondition {
}
class ClassBookingCondition extends ClassCondition {
}
class ClassAvailabilityCondition extends ClassCondition {
}
class Seat {
}
class ConnectionPointCondition {
}
class ConnectionCity {
}
class ConnectionCityAirport {
}
class TimeConnectionCity {
}
class EquipmentCondition {
}
class FlightCondition {
}
class CarrierFlightCondition {
}
class CarrierFlight {
}
class Flight {
}
class PassengerLoyaltyCondition {
}
class PassengerLoyalty {
}
class LoadFactorCondition {
}
class MarketCondition {
}
class Market {
}
class PointOfCommencementCondition {
}
class PointOfSaleCondition {
}
class RoutingCondition {
}
class Routing {
}
class TimeDepartureCondition {
}
class Time {
}
class RuleRs {
}
class RuleSummary {
}
class ChildRule {
}
// fcb
class TypeOfSegment {
}
class DisplayOrderAction {
}
class FcbDisplayOrderActionInput {
}
class FcbIncludeExcludeConnectionsActionInput {
}
class FcbConnectionOverrideActionInput {
}
class FcbFlightAndCarrierSuppressionActionInput {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class OriginDestination {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class RuleExportRq {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class RqStandardPayload {
}
class PointOfSale {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class RsStandardPayload {
}
class Errors {
}
class Warnings {
}
class ErrorWarning {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class Values {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class TableRs {
}
class TableStructureRs {
}
class Row {
}
class Column {
}
class TableStructure {
}
class CommonPointOfSale {
}
class TableUpdateRq {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class Airline {
}
class AirlineRs {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class CarrierPreference {
}
class CarrierPreferencesRs {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class CityAirport {
}
class CityAirportRs {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class Country {
}
class CountryRs {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class Currency {
}
class CurrencyRs {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class GroupCarrier {
}
class FlightRange {
}
class GroupFlight {
}
class GroupCarrierFlight {
}
class GroupCarrierFlightRange {
}
class Location {
}
class POS {
}
class Grouping {
}
class GroupingRq {
}
class GroupingRs {
}
class ExportGrouping {
}
class GroupingExportRq {
}
class GroupSummaryParent {
}
class GroupSummaryChild {
}
class GroupingDirectoryRs {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class RuleOrderChild {
}
class Order {
}
class RuleOrderRq {
}
class RuleOrderRs {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class Cabinbidprice {
}
class Cabin {
}
class Bidprices {
}
class BidPriceData {
}
class BidPriceRes {
}
class BaseFarePrice {
}
class BaseFareData {
}
class BaseFareRes {
}
class Error {
}
class SeatParams {
}
class Classitem {
}
class Seatcomputation {
}
class Responsemessage {
}
class Messagedetail {
}
class Systemdetail {
}
class Originatoriddetail {
}
class Locationdetail {
}
class AirportLocation {
}
class Equipment {
}
class BookingClassList {
}
class FlightSegment {
}
class OperatingAirline {
}
class OriginDestinationOption {
}
class OriginDestinationOptions {
}
class DepartureDateTime {
}
class OriginDestinationLocation {
}
class OriginDestinationInformation {
}
class Success {
}
class OTAAirAvailRS {
}
class Systemdetailadditional {
}
class OriginatorDetails {
}
class OrgRule {
}
class Arrdeptimes {
}
class Flightdetail {
}
class Groupnumber {
}
class Marriagecontrol {
}
class Travelsegment {
}
class Odi {
}
class Paoreq {
}
class Productdetail {
}
class Productdetaillist {
}
class Paores {
}
class SeatComputationData {
}
class SeatComputationRes {
}
class Company {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class MarketAvailWarning {
}
class MarketAvailWarnings {
}
class SegmentOptions {
}
class ConnectionInput {
}
class Double {
}
class Triple {
}
class Quadruple {
}
class ConnectionCities {
}
class ConnectionInfo {
}
class MarketAvailOperatingAirline {
}
class MarketAvailCabin {
}
class BookingClass {
}
class LocationCode {
}
class DEI {
}
class LegInfo {
}
class MarketAvailFlightSegment extends LegInfo {
}
class OrigAndDestSolution {
}
class OrigAndDestInfo {
}
class MarketAvailRule {
}
class MarketAvailRuleSet {
}
class RuleType {
}
class MarketAvailOd {
}
class RuleConset {
}
class MarketAvailRuleSetDetails {
}
class MarketAvailRules {
}
class MarketAvailError {
}
class MarketAvailErrors {
}
class MarketAvailResponse {
}
class RuleReport {
}
class ValueArray {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class MarketavailRequestorID {
}
class MarketavailSource {
}
class MarketavailCompany {
}
class MarketavailBookingChannel {
}
class MarketavailPOS {
}
class MarketavailProcessingInfo {
}
class MarketavailSpecificFlight {
}
class MarketavailVendorPref {
}
class MarketavailEquipmentPref {
}
class MarketavailCabinPref {
}
class MarketavailTravelPreferences {
}
class MarketavailRequest {
}
class MarketavailMarketAvailRQ {
}
class MarketAvailabilityRequest {
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

class ServicesModule {
}
ServicesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ServicesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ServicesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ServicesModule, imports: [CommonModule,
        HttpClientModule], exports: [HttpClientModule] });
ServicesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ServicesModule, providers: [
        MarketService
    ], imports: [[
            CommonModule,
            HttpClientModule
        ], HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ServicesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    declarations: [],
                    exports: [
                        HttpClientModule
                    ],
                    providers: [
                        MarketService
                    ]
                }]
        }] });

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Action, Airline, AirlineRs, AirportLocation, AllowPartialCancelationActionInput, Arrdeptimes, AvailabilityAdjustmentActionInput, BaseFareData, BaseFarePrice, BaseFareRes, BidPriceActionInput, BidPriceData, BidPriceRes, BidPriceSeat, Bidprices, BookingClass, BookingClassList, Cabin, Cabinbidprice, CarrierCondition, CarrierFlight, CarrierFlightCondition, CarrierPreference, CarrierPreferencesRs, Categories, ChildRule, CityAirport, CityAirportRs, ClassAvailabilityCondition, ClassBookingCondition, ClassClosureActionInput, ClassCondition, ClassSuppressionActionInput, Classitem, Column, CommonPointOfSale, Company, Condition, ConnectionCities, ConnectionCity, ConnectionCityAirport, ConnectionInfo, ConnectionInput, ConnectionPointCondition, Country, CountryRs, Currency, CurrencyRs, DEI, DateOrRange, DateTimeCondition, DepartureDateTime, DisplayOrderAction, Double, Equipment, EquipmentCondition, Error, ErrorWarning, Errors, ExportGrouping, FcbConnectionOverrideActionInput, FcbDisplayOrderActionInput, FcbFlightAndCarrierSuppressionActionInput, FcbIncludeExcludeConnectionsActionInput, Flight, FlightCondition, FlightRange, FlightSegment, Flightdetail, GroupCarrier, GroupCarrierFlight, GroupCarrierFlightRange, GroupFlight, GroupSummaryChild, GroupSummaryParent, Grouping, GroupingDirectoryRs, GroupingExportRq, GroupingRq, GroupingRs, Groupnumber, HttpService, JourneyDataControlActionInput, LegInfo, LoadFactorCondition, Location, LocationCode, Locationdetail, Market, MarketAvailCabin, MarketAvailError, MarketAvailErrors, MarketAvailFlightSegment, MarketAvailOd, MarketAvailOperatingAirline, MarketAvailResponse, MarketAvailRule, MarketAvailRuleSet, MarketAvailRuleSetDetails, MarketAvailRules, MarketAvailWarning, MarketAvailWarnings, MarketAvailabilityRequest, MarketCondition, MarketFareActionInput, MarketService, MarketavailBookingChannel, MarketavailCabinPref, MarketavailCompany, MarketavailEquipmentPref, MarketavailMarketAvailRQ, MarketavailPOS, MarketavailProcessingInfo, MarketavailRequest, MarketavailRequestorID, MarketavailSource, MarketavailSpecificFlight, MarketavailTravelPreferences, MarketavailVendorPref, Marriagecontrol, Messagedetail, OTAAirAvailRS, Odi, OperatingAirline, Order, OrgRule, OrigAndDestInfo, OrigAndDestSolution, OriginDestination, OriginDestinationInformation, OriginDestinationLocation, OriginDestinationOption, OriginDestinationOptions, OriginatorDetails, Originatoriddetail, POS, Paoreq, Paores, PassengerLoyalty, PassengerLoyaltyCondition, PointOfCommencementCondition, PointOfSale, PointOfSaleCondition, Productdetail, Productdetaillist, Quadruple, Responsemessage, Routing, RoutingCondition, Row, RqStandardPayload, RsStandardPayload, Rule, RuleConset, RuleExportRq, RuleOrderChild, RuleOrderRq, RuleOrderRs, RuleReport, RuleRq, RuleRs, RuleSummary, RuleType, Seat, SeatComputationData, SeatComputationRes, SeatParams, Seatcomputation, SegmentOptions, ServicesModule, Success, Systemdetail, Systemdetailadditional, TableRs, TableStructure, TableStructureRs, TableUpdateRq, Time, TimeConnectionCity, TimeDepartureCondition, Travelsegment, Triple, TypeOfSegment, ValueArray, Values, Warnings };
//# sourceMappingURL=tr-ux-ace-services.mjs.map
