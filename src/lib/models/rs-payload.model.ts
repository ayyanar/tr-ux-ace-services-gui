/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

export class RsStandardPayload {
    public correlationId: string;
    public success: boolean;
    public version: string;
    public errors: Errors;
    public warnings: Warnings;
}

export class Errors {
    public error: ErrorWarning[];
}

export class Warnings {
   public warning: ErrorWarning[];
}

export class ErrorWarning {
    public code: string;
    public message: string;
}
