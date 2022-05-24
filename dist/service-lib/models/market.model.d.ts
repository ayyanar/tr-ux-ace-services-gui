export declare class Cabinbidprice {
    bpgsa: string;
    cbp: string;
    lbp: string;
    obp: string;
    rbp: string;
}
export declare class Cabin {
    cabinclass: string;
    revcarrycost: string;
    revdsp: string;
    rewardcarrycost: string;
    rewarddsp: string;
    maxcap: string;
    cabinbidprices: Cabinbidprice[];
    showAll?: boolean;
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
export declare class Bidprices {
    carrier: string;
    flightnumber: string;
    flightdate: string;
    legboardpoint: string;
    legoffpoint: string;
    cabins: Cabin[];
}
export declare class BidPriceData {
    bidprices: Bidprices[];
    paoreq: Paoreq;
    edifact: string;
    paores: Paores;
}
export declare class BidPriceRes {
    data: BidPriceData;
    error: Error;
}
export declare class BaseFarePrice {
    class: string;
    value: number;
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
export declare class BaseFareData {
    basefare: Basefare[];
    paoreq: Paoreq;
    edifact: string;
    paores: Paores;
}
export declare class BaseFareRes {
    data: BaseFareData;
    error: Error;
}
export declare class Error {
    status_code: number;
    error_code: number;
    error_sub_code: number;
    error_text: string;
}
export declare class SeatParams {
    gsa: number;
    basefare: number;
    basefareadjusted: number;
    sign1: string;
    bidprice: number;
    sign2: string;
    carrycost: number;
    sign3: string;
    displacement: number;
    equal: string;
    total: number;
    result: string;
    nbrseats: any;
}
export declare class Classitem {
    class: string;
    bidtype: string;
    ccdsptype: string;
    seat: SeatParams[];
}
export declare class Seatcomputation {
    flightnumber: string;
    origin: string;
    destination: string;
    classitem: Classitem;
}
export declare class Responsemessage {
    busfunction: string;
    msgfunction: string;
    responsibleagency?: any;
    msgfunction2?: any;
}
export declare class Messagedetail {
    responsemessage: Responsemessage;
    responsetype?: any;
}
export declare class Systemdetail {
    companyid: string;
    locationid: string;
    location: string;
}
export declare class Originatoriddetail {
    travelagentcode?: any;
    inhousecode1?: any;
    inhousecode2?: any;
}
export declare class Locationdetail {
    location: string;
    locationind?: any;
}
export declare class AirportLocation {
    LocationCode: string;
    CodeContext?: any;
    Terminal?: any;
    Gate?: any;
}
export declare class Equipment {
    value: string;
    AirEquipType: string;
    ChangeofGauge?: any;
}
export declare class BookingClassList {
    RPH?: any;
    ResBookDesigCode: string;
    ResBookDesigQuantity: string;
    ResBookDesigStatusCode?: any;
}
export declare class FlightSegment {
    BookingClassAvail: BookingClassList[];
    DepartureAirport: AirportLocation;
    ArrivalAirport: AirportLocation;
    Equipment: Equipment[];
    DepartureDateTime: Date;
    ArrivalDateTime: Date;
    StopQuantity: number;
    RPH?: any;
    InfoSource?: any;
    MarketingAirline: OperatingAirline;
    FlightNumber: string;
    TourOperatorFlightID?: any;
    GovernmentApprovalInd?: any;
    GovernmentApprovalText?: any;
    JourneyDuration?: any;
    OnTimeRate?: any;
    Ticket?: any;
    ParticipationLevelCode?: any;
    GroundDuration?: any;
    AccumulatedDuration: string;
    Distance?: any;
    CodeshareInd?: any;
    FlifoInd?: any;
    DateChangeNbr?: any;
    SequenceNumber?: any;
    OptionalServicesInd?: any;
    SmokingAllowed?: any;
    OperatingAirline: OperatingAirline;
}
export declare class OperatingAirline {
    value: string;
    Division?: any;
    Department?: any;
    CompanyShortName?: any;
    TravelSector?: any;
    Code?: any;
    CodeContext?: any;
    FlightNumber?: any;
    ResBookDesigCode?: any;
}
export declare class OriginDestinationOption {
    FlightSegment: FlightSegment[];
}
export declare class OriginDestinationOptions {
    OriginDestinationOption: OriginDestinationOption[];
}
export declare class DepartureDateTime {
    value: string;
    WindowBefore?: any;
    WindowAfter?: any;
    CrossDateAllowedIndicator?: any;
}
export declare class OriginDestinationLocation {
    value: string;
    LocationCode: string;
    CodeContext?: any;
    MultiAirportCityInd?: any;
    AlternateLocationInd?: any;
}
export declare class OriginDestinationInformation {
    OriginDestinationOptions: OriginDestinationOptions;
    DepartureDateTime: DepartureDateTime;
    OriginLocation: OriginDestinationLocation;
    DestinationLocation: OriginDestinationLocation;
    SameAirportInd?: any;
    RPH?: any;
}
export declare class Success {
    msg: string;
}
export declare class OTAAirAvailRS {
    Errors: OTAErrors;
    Success: Success;
    OriginDestinationInformation: OriginDestinationInformation[];
    EchoToken?: any;
    TimeStamp: Date;
    Target?: any;
    TargetName?: any;
    Version: number;
    TransactionIdentifier?: any;
    SequenceNmbr?: any;
    TransactionStatusCode?: any;
    RetransmissionIndicator?: any;
    CorrelationID?: any;
    AltLangID?: any;
    PrimaryLangID?: any;
}
export interface FullMarketResponse {
    OTA_AirAvailRS: OTAAirAvailRS;
}
export declare class Systemdetailadditional {
    companyid: string;
    locationid?: any;
    location?: any;
}
export declare class OriginatorDetails {
    country: string;
    currency: string;
    language?: any;
}
export declare class OrgRule {
    systemdetail: Systemdetail;
    originatoriddetail: Originatoriddetail;
    locationdetail: Locationdetail;
    systemdetailadditional: Systemdetailadditional;
    originatortype: string;
    originatordetail: OriginatorDetails;
    authoritycode: string;
    commuinicationnumber?: any;
    partyid?: any;
}
export declare class Arrdeptimes {
    depdate: string;
    deptime: string;
    arrdate?: any;
    arrtime?: any;
    datevariation?: any;
}
export declare class Flightdetail {
    flightnumber: string;
    bookingdesignator: string;
    productid?: any;
    bookingdesignatordescription?: any;
}
export declare class Groupnumber {
    seqnumber: string;
    seqnumber2?: any;
}
export declare class Marriagecontrol {
    relation?: any;
    groupnumber?: any;
    lineitemnumber?: any;
    relation2?: any;
    companyid?: any;
}
export declare class Travelsegment {
    arrdeptimes: Arrdeptimes;
    boardpoint: Locationdetail;
    offpoint: Locationdetail;
    company: Company;
    flightdetail: Flightdetail;
    groupnumber: Groupnumber;
    lineitemnumber: string;
    processind?: any;
    marriagecontrol: Marriagecontrol;
    productdetaillist?: Productdetaillist;
    tvlerrorresponse?: any;
    relatedproduct?: any;
}
export declare class Odi {
    origin: string;
    destination: string;
    travelsegments: Travelsegment[];
}
export declare class Paoreq {
    messagedetail: Messagedetail;
    org: OrgRule;
    simulation: boolean;
    odigroups: Odi[];
}
export declare class Productdetail {
    bookingclass: string;
    seatsavailable: number;
    specialservice?: any;
    bookingclasssuffix?: any;
}
export declare class Productdetaillist {
    productdetailqualifier?: any;
    productdetails: Productdetail[];
}
export declare class Paores {
    messagedetail: Messagedetail;
    errorresponse?: any;
    odi: Odi[];
}
export declare class SeatComputationData {
    seatcomputation: Seatcomputation[];
    paoreq: Paoreq;
    edifact: string;
    paores: Paores;
}
export declare class SeatComputationRes {
    data: SeatComputationData;
}
export interface Adjbasefare {
    class: string;
    basefare: number;
    adjustedbasefare: number;
}
export declare class Company {
    companyid: string;
    companyid2?: string;
    companyid3?: any;
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
