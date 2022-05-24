import { RqStandardPayload } from './rq-payload.model';
import { RsStandardPayload } from './rs-payload.model';
export declare class RuleOrderChild {
    gid: number;
    orderNumber: number;
}
export declare class Order {
    id: string;
    gid: number;
    version: number;
    status: string;
    time: string;
    name: string;
    type: string;
    userId: string;
    order: RuleOrderChild[];
}
export declare class RuleOrderRq {
    order: Order[];
    rqStandardPayload: RqStandardPayload;
}
export declare class RuleOrderRs {
    order: Order[];
    rsStandardPayload: RsStandardPayload;
}
