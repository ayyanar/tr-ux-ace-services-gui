/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

export class Cabinbidprice {
    public bpgsa: string;
    public cbp: string;
    public lbp: string;
    public obp: string;
    public rbp: string;
}

export class Cabin {
    public cabinclass: string;
    public revcarrycost: string;
    public revdsp: string;
    public rewardcarrycost: string;
    public rewarddsp: string;
    public maxcap: string;
    public cabinbidprices: Cabinbidprice[];
    public showAll?: boolean;
}

export interface BidPriceModel {
    leftCabins: Cabin[];
    leftValue: Cabin[];
    rightValue: Cabin[];
    origin: string;
    destination: string;
    flightNo: string;
    carrier: string;
}

export class Bidprices {
    public carrier: string;
    public flightnumber: string;
    public flightdate: string;
    public legboardpoint: string;
    public legoffpoint: string;
    public cabins: Cabin[];
}
export class BidPriceData {
    public bidprices: Bidprices[];
    public paoreq: Paoreq;
    public edifact: string;
    public paores: Paores;
}

export class BidPriceRes {
    public data: BidPriceData;
    public error: Error;
}

export class BaseFarePrice {
    public class: string;
    public value: number;
}

export interface Basefare {
    origin: string;
    destination: string;
    firstconnectpoint?: any;
    secondconnectpoint?: any;
    country: string;
    departuredate: string;
    bft_origin: string;
    bft_destination: string;
    bft_type: string;
    bft_eff_date: string;
    bft_disc_date: string;
    bft_daysofweek: string;
    bft_country: string;
    basefares: BaseFarePrice[];
}

export class BaseFareData {
    public basefare: Basefare[];
    public paoreq: Paoreq;
    public edifact: string;
    public paores: Paores;
}

export class BaseFareRes {
    public data: BaseFareData;
    public error: Error;
}

export class Error {
    public status_code: number;
    public error_code: number;
    public error_sub_code: number;
    public error_text: string;
}

export class SeatParams {
    public gsa: number;
    public basefare: number;
    public basefareadjusted: number;
    public sign1: string;
    public bidprice: number;
    public sign2: string;
    public carrycost: number;
    public sign3: string;
    public displacement: number;
    public equal: string;
    public total: number;
    public result: string;
    public nbrseats: any;
}

export class Classitem {
    public class: string;
    public bidtype: string;
    public ccdsptype: string;
    public seat: SeatParams[];
}

export class Seatcomputation {
    public flightnumber: string;
    public origin: string;
    public destination: string;
    public classitem: Classitem;
}

export class Responsemessage {
    public busfunction: string;
    public msgfunction: string;
    public responsibleagency?: any;
    public msgfunction2?: any;
}

export class Messagedetail {
    public responsemessage: Responsemessage;
    public responsetype?: any;
}

export class Systemdetail {
    public companyid: string;
    public locationid: string;
    public location: string;
}

export class Originatoriddetail {
    public travelagentcode?: any;
    public inhousecode1?: any;
    public inhousecode2?: any;
}

export class Locationdetail {
    public location: string;
    public locationind?: any;
}

export class AirportLocation {
    public LocationCode: string;
    public CodeContext?: any;
    public Terminal?: any;
    public Gate?: any;
}

export class Equipment {
    public value: string;
    public AirEquipType: string;
    public ChangeofGauge?: any;
}

export class BookingClassList {
    public RPH?: any;
    public ResBookDesigCode: string;
    public ResBookDesigQuantity: string;
    public ResBookDesigStatusCode?: any;
}

export class FlightSegment {
    public BookingClassAvail: BookingClassList[];
    public DepartureAirport: AirportLocation;
    public ArrivalAirport: AirportLocation;
    public Equipment: Equipment[];
    public DepartureDateTime: Date;
    public ArrivalDateTime: Date;
    public StopQuantity: number;
    public RPH?: any;
    public InfoSource?: any;
    public MarketingAirline: OperatingAirline;
    public FlightNumber: string;
    public TourOperatorFlightID?: any;
    public GovernmentApprovalInd?: any;
    public GovernmentApprovalText?: any;
    public JourneyDuration?: any;
    public OnTimeRate?: any;
    public Ticket?: any;
    public ParticipationLevelCode?: any;
    public GroundDuration?: any;
    public AccumulatedDuration: string;
    public Distance?: any;
    public CodeshareInd?: any;
    public FlifoInd?: any;
    public DateChangeNbr?: any;
    public SequenceNumber?: any;
    public OptionalServicesInd?: any;
    public SmokingAllowed?: any;
    public OperatingAirline: OperatingAirline;
}

export class OperatingAirline {
    public value: string;
    public Division?: any;
    public Department?: any;
    public CompanyShortName?: any;
    public TravelSector?: any;
    public Code?: any;
    public CodeContext?: any;
    public FlightNumber?: any;
    public ResBookDesigCode?: any;
}

export class OriginDestinationOption {
    public FlightSegment: FlightSegment[];
}

export class OriginDestinationOptions {
    public OriginDestinationOption: OriginDestinationOption[];
}

export class DepartureDateTime {
    public value: string;
    public WindowBefore?: any;
    public WindowAfter?: any;
    public CrossDateAllowedIndicator?: any;
}

export class OriginDestinationLocation {
    public value: string;
    public LocationCode: string;
    public CodeContext?: any;
    public MultiAirportCityInd?: any;
    public AlternateLocationInd?: any;
}

export class OriginDestinationInformation {
    public OriginDestinationOptions: OriginDestinationOptions;
    public DepartureDateTime: DepartureDateTime;
    public OriginLocation: OriginDestinationLocation;
    public DestinationLocation: OriginDestinationLocation;
    public SameAirportInd?: any;
    public RPH?: any;
}

export class Success {
    public msg: string;
}

export class OTAAirAvailRS {
    public Errors: OTAErrors;
    public Success: Success;
    public OriginDestinationInformation: OriginDestinationInformation[];
    public EchoToken?: any;
    public TimeStamp: Date;
    public Target?: any;
    public TargetName?: any;
    public Version: number;
    public TransactionIdentifier?: any;
    public SequenceNmbr?: any;
    public TransactionStatusCode?: any;
    public RetransmissionIndicator?: any;
    public CorrelationID?: any;
    public AltLangID?: any;
    public PrimaryLangID?: any;
}

export interface FullMarketResponse {
    OTA_AirAvailRS: OTAAirAvailRS;
}

export class Systemdetailadditional {
    public companyid: string;
    public locationid?: any;
    public location?: any;
}

export class OriginatorDetails {
    public country: string;
    public currency: string;
    public language?: any;
}

export class OrgRule {
    public systemdetail: Systemdetail;
    public originatoriddetail: Originatoriddetail;
    public locationdetail: Locationdetail;
    public systemdetailadditional: Systemdetailadditional;
    public originatortype: string;
    public originatordetail: OriginatorDetails;
    public authoritycode: string;
    public commuinicationnumber?: any;
    public partyid?: any;
}

export class Arrdeptimes {
    public depdate: string;
    public deptime: string;
    public arrdate?: any;
    public arrtime?: any;
    public datevariation?: any;
}

export class Flightdetail {
    public flightnumber: string;
    public bookingdesignator: string;
    public productid?: any;
    public bookingdesignatordescription?: any;
}

export class Groupnumber {
    public seqnumber: string;
    public seqnumber2?: any;
}

export class Marriagecontrol {
    public relation?: any;
    public groupnumber?: any;
    public lineitemnumber?: any;
    public relation2?: any;
    public companyid?: any;
}

export class Travelsegment {
    public arrdeptimes: Arrdeptimes;
    public boardpoint: Locationdetail;
    public offpoint: Locationdetail;
    public company: Company;
    public flightdetail: Flightdetail;
    public groupnumber: Groupnumber;
    public lineitemnumber: string;
    public processind?: any;
    public marriagecontrol: Marriagecontrol;
    public productdetaillist?: Productdetaillist;
    public tvlerrorresponse?: any;
    public relatedproduct?: any;
}

export class Odi {
    public origin: string;
    public destination: string;
    public travelsegments: Travelsegment[];
}

export class Paoreq {
    public messagedetail: Messagedetail;
    public org: OrgRule;
    public simulation: boolean;
    public odigroups: Odi[];
}

export class Productdetail {
    public bookingclass: string;
    public seatsavailable: number;
    public specialservice?: any;
    public bookingclasssuffix?: any;
}

export class Productdetaillist {
    public productdetailqualifier?: any;
    public productdetails: Productdetail[];
}

export class Paores {
    public messagedetail: Messagedetail;
    public errorresponse?: any;
    public odi: Odi[];
}

export class SeatComputationData {
    public seatcomputation: Seatcomputation[];
    public paoreq: Paoreq;
    public edifact: string;
    public paores: Paores;
}

export class SeatComputationRes {
    public data: SeatComputationData;
}

export interface Adjbasefare {
    class: string;
    basefare: number;
    adjustedbasefare: number;
}

export class Company {
    public companyid: string;
    public companyid2?: string;
    public companyid3?: any;
}

export interface DeliveringSystemDetails {
    company_identification: string;
    location: string;
    location_name: string;
}

export interface OriginatingSystemDetails {
    company_identification: string;
}

export interface AllReportsOrg {
    delivering_system_details: DeliveringSystemDetails;
    location: Locationdetail;
    originating_system_details: OriginatingSystemDetails;
    originator_type_code: string;
    originator_details: OriginatorDetails;
    originator_authority_request_code: string;
}

export interface ProductDatetime {
    departure: string;
}

export interface BoardOffLocation {
    identification: string;
}

export interface CompanyIdentification {
    marketing_airline: string;
    operating_airline: string;
}

export interface ProductIdentificationDetails {
    flight: number;
    flight_suffix: string;
}

export interface Tvl {
    product_datetime: ProductDatetime;
    board_location: BoardOffLocation;
    off_location: BoardOffLocation;
    company_identification: CompanyIdentification;
    product_identification_details: ProductIdentificationDetails;
    groupnumber: Groupnumber;
    lineitemnumber: number;
}

export interface AllReportsOdi {
    origin: string;
    destination: string;
    tvl: Tvl[];
}

export interface JsonReq {
    sender: string;
    recipient: string;
    org: AllReportsOrg;
    odi: AllReportsOdi[];
}

export interface Leg {
    origin: string;
    destination: string;
    carrier: string;
    flight: string;
}

export interface Columns {
    legs: Leg[];
}

export interface Gsadata {
    gsa: number;
    leg_bid: number;
}

export interface RowData {
    gsadata: Gsadata[];
    bid_total: number;
    base_fare: number;
    netval: number;
    result: string;
    avail_seats: number;
}

export interface CopaClassitem {
    class: string;
    row: RowData[];
}

export interface CopaSeatComputation {
    columns: Columns;
    classitem: CopaClassitem[];
}

export interface OTAError {
    value: string;
    Language?: any;
    Type: string;
    NodeList?: any;
    ShortText?: any;
    Code?: any;
    DocURL?: any;
    Status?: any;
    Tag?: any;
    RecordID?: any;
}

export interface OTAErrors {
    Error: OTAError[];
}
