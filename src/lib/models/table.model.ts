/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { RqStandardPayload } from './rq-payload.model';
import { RsStandardPayload } from './rs-payload.model';

export class TableRs {
    public rsStandardPayload: RsStandardPayload;
    public row: Row[];
    public tableStructure: TableStructure;
}

export class TableStructureRs {
    public rsStandardPayload: RsStandardPayload;
    public tableStructure: TableStructure[];
}

export class Row {
    public gid: number;
    public version: number;
    public name: string;
    public time: string;
    public type: string;
    public userId: string;
    public status: string;
    /***
     * Operation to perform on the row. ADD, UPDATE, UPDATE_STATUS or
     * DELETE. Default is ADD or UPDATE,
     * depending on if the Id and Version is included (update) or not (add)
     ***/
    public operation: string;
    public column: string[];
}

export class Column {
    public name: string;
    public displayName: string;
    // public guiMetadata: string;
    public listDelim: string;
    public subListDelim: string;
    public maxDecimalPlaces: number;
    public maxLength: number;
    public maxListItems: number;
    public maxNumber: number;
    public minDecimalPlacesToDisplay: number;
    public minLength: number;
    public minListItems: number;
    public minNumber: number;
    public required: string;
    public type: string;
    public validationErrorCode: number;
    public validationErrorMessage: string;
    public validationRegEx: string;
    public readRoles: string[];
    public updateRoles: string[];
    public noDupes: boolean;
    public displayInList: boolean;
    public headerName: string;
}

export class TableStructure {
    public gid: number;
    public version: number;
    public name: string;
    public time: string;
    public type: string;
    public userId: string;
    public description: string;
    public paging: string;
    public readOnly: string;
    public hideButtons: string;
    public column: Column[];
    public readRoles: string[];
    public updateRoles: string[];
}

export class CommonPointOfSale {
    public agencyAirlineName: string;
    public agencyAirlinePlace: string;
    public agentDutyCode: string;
    public agentSine: string;
    public airlineVendorId: string;
    public airportCode: string;
    public isoCountry: string;
    public isoCurrency: string;
    public posIataLocation: string;
    public pseudoCityCode: string;
    public requestorCompanyCode: string;
    public requestorCompanyContext: string;
    public requestorId: string;
    public requestorIdContext: string;
    public requestorType: string;
    public userId: string;
    public agentRole: string;
    public terminalId: string;
    public department: string;
    public division: string;
    public travelAgencyId: string;
}

export class TableUpdateRq {
    public rqStandardPayload: RqStandardPayload;
    public row: Row[];
}
