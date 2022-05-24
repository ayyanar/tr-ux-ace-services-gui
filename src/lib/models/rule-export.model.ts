/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RqStandardPayload } from './rq-payload.model';
import { Rule } from './rule.model';

export class RuleExportRq {
    public rqStandardPayload: RqStandardPayload;
    public excel: boolean;
    public rule: Rule[];
}
