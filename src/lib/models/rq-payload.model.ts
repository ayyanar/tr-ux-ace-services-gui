/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

export class RqStandardPayload {
    public correlationId: string;
    public pointOfSale: PointOfSale;
}

export class PointOfSale {
    public agencyAirlineName: string;
    public agencyAirlinePlace: string;
    public agentDutyCode: string;
    public agentRole: string;
    public agentSine: string;
    public airlineVendorId: string;
    public airportCode: string;
    public department: string;
    public division: string;
    public isoCountry: string;
    public isoCurrency: string;
    public posIataLocation: string;
    public pseudoCityCode: string;
    public requestorCompanyCode: string;
    public requestorCompanyContext: string;
    public requestorId: string;
    public requestorIdContext: string;
    public requestorType: string;
    public terminalId: string;
    public travelAgencyId: string;
    public userId: string;
  }
