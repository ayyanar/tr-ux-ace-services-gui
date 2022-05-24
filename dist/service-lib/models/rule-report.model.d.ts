import { Locationdetail, Paores, OriginatorDetails, Originatoriddetail, Systemdetailadditional, Paoreq, Bidprices, Basefare, Adjbasefare } from './market.model';
export interface Org {
    systemdetail: Systemdetailadditional;
    originatoriddetail: Originatoriddetail;
    locationdetail: Locationdetail;
    originatordetail: OriginatorDetails;
    systemdetailadditional: Systemdetailadditional;
    originatortype: string;
    authoritycode: string;
}
export interface Response {
    edifact: string;
}
export interface RuleRep {
    gid: number;
    version: number;
    exec_status: number;
}
export interface RuleSet {
    clazz: string;
    rule: RuleRep[];
}
export interface OdRuleSet {
    rule_set: RuleSet[];
    seg_origin: string;
    seg_destination?: string;
    departure_date?: string;
}
export interface Od {
    base_fare: OdRuleSet[];
    availability_adj: OdRuleSet[];
    class_closure: OdRuleSet[];
    class_suppression: OdRuleSet[];
    journey_control: OdRuleSet[];
    bid_price: OdRuleSet[];
    partial_cancel: OdRuleSet[];
    origin: string;
    destination: string;
    departure_date: string;
}
export interface RuleSetDetailsModel {
    order: number;
    name: string;
    type: string;
    user_id: string;
    gid: number;
    version: number;
    status: string;
    time: Date;
}
export interface RuleSetDetails {
    base_fare_adjustment: RuleSetDetailsModel[];
    class_closure: RuleSetDetailsModel[];
    availability_adjustment: RuleSetDetailsModel[];
    class_suppression: RuleSetDetailsModel[];
    journey_exception: RuleSetDetailsModel[];
    partial_cancelation: RuleSetDetailsModel[];
    bid_price_adjustment: RuleSetDetailsModel[];
}
export interface Rules {
    od: Od[];
    rule_set_details: RuleSetDetails;
}
export interface Data {
    copaseatcomputation: null;
    paoreq: Paoreq;
    paores: Paores;
    response: Response;
    bidprices: Bidprices[];
    basefare: Basefare[];
    adjbasefare: Adjbasefare[];
    rules: Rules;
}
export interface RsStandardRulePayload {
    errors: ReportErrors;
    correlation_id: string;
    success: boolean;
    version: string;
}
export interface RuleReportRes {
    data: Data;
    mode: boolean;
    rs_standard_payload: RsStandardRulePayload;
}
export interface ReportError {
    code: string;
    message: string;
}
export interface ReportErrors {
    error: ReportError[];
}
