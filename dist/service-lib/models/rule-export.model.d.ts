import { RqStandardPayload } from './rq-payload.model';
import { Rule } from './rule.model';
export declare class RuleExportRq {
    rqStandardPayload: RqStandardPayload;
    excel: boolean;
    rule: Rule[];
}
