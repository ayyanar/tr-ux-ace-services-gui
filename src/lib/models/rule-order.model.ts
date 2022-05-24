/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RqStandardPayload } from './rq-payload.model';
import { RsStandardPayload } from './rs-payload.model';

export class RuleOrderChild {
    public gid: number;
    public orderNumber: number;
}

export class Order {
    public id: string;
    public gid: number;
    public version: number;
    public status: string;
    public time: string;
    public name: string;
    public type: string;
    public userId: string;
    public order: RuleOrderChild[];
}

export class RuleOrderRq {
    public order: Order[];
    public rqStandardPayload: RqStandardPayload;
}

export class RuleOrderRs {
    public order: Order[];
    public rsStandardPayload: RsStandardPayload;
}
