import { RqStandardPayload } from './rq-payload.model';
import { RsStandardPayload } from './rs-payload.model';
export declare class TableRs {
    rsStandardPayload: RsStandardPayload;
    row: Row[];
    tableStructure: TableStructure;
}
export declare class TableStructureRs {
    rsStandardPayload: RsStandardPayload;
    tableStructure: TableStructure[];
}
export declare class Row {
    gid: number;
    version: number;
    name: string;
    time: string;
    type: string;
    userId: string;
    status: string;
    /***
     * Operation to perform on the row. ADD, UPDATE, UPDATE_STATUS or
     * DELETE. Default is ADD or UPDATE,
     * depending on if the Id and Version is included (update) or not (add)
     ***/
    operation: string;
    column: string[];
}
export declare class Column {
    name: string;
    displayName: string;
    listDelim: string;
    subListDelim: string;
    maxDecimalPlaces: number;
    maxLength: number;
    maxListItems: number;
    maxNumber: number;
    minDecimalPlacesToDisplay: number;
    minLength: number;
    minListItems: number;
    minNumber: number;
    required: string;
    type: string;
    validationErrorCode: number;
    validationErrorMessage: string;
    validationRegEx: string;
    readRoles: string[];
    updateRoles: string[];
    noDupes: boolean;
    displayInList: boolean;
    headerName: string;
}
export declare class TableStructure {
    gid: number;
    version: number;
    name: string;
    time: string;
    type: string;
    userId: string;
    description: string;
    paging: string;
    readOnly: string;
    hideButtons: string;
    column: Column[];
    readRoles: string[];
    updateRoles: string[];
}
export declare class CommonPointOfSale {
    agencyAirlineName: string;
    agencyAirlinePlace: string;
    agentDutyCode: string;
    agentSine: string;
    airlineVendorId: string;
    airportCode: string;
    isoCountry: string;
    isoCurrency: string;
    posIataLocation: string;
    pseudoCityCode: string;
    requestorCompanyCode: string;
    requestorCompanyContext: string;
    requestorId: string;
    requestorIdContext: string;
    requestorType: string;
    userId: string;
    agentRole: string;
    terminalId: string;
    department: string;
    division: string;
    travelAgencyId: string;
}
export declare class TableUpdateRq {
    rqStandardPayload: RqStandardPayload;
    row: Row[];
}
