export declare class RsStandardPayload {
    correlationId: string;
    success: boolean;
    version: string;
    errors: Errors;
    warnings: Warnings;
}
export declare class Errors {
    error: ErrorWarning[];
}
export declare class Warnings {
    warning: ErrorWarning[];
}
export declare class ErrorWarning {
    code: string;
    message: string;
}
