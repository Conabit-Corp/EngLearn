// package: conabit.englearn.dashboard
// file: proto/conabit/englearn/dashboard/dashboard_service.proto

import * as proto_conabit_englearn_dashboard_dashboard_service_pb from "../../../../proto/conabit/englearn/dashboard/dashboard_service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DashboardServiceWordOfDay = {
  readonly methodName: string;
  readonly service: typeof DashboardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_dashboard_dashboard_service_pb.WordOfDayRequest;
  readonly responseType: typeof proto_conabit_englearn_dashboard_dashboard_service_pb.WordOfDayResponse;
};

type DashboardServiceMyStatisticsOverwiev = {
  readonly methodName: string;
  readonly service: typeof DashboardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_dashboard_dashboard_service_pb.MyStatisticsOverwievRequest;
  readonly responseType: typeof proto_conabit_englearn_dashboard_dashboard_service_pb.MyStatisticsOverwievResponse;
};

type DashboardServiceWordsToRepeat = {
  readonly methodName: string;
  readonly service: typeof DashboardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_dashboard_dashboard_service_pb.WordsToRepeatRequest;
  readonly responseType: typeof proto_conabit_englearn_dashboard_dashboard_service_pb.WordsToRepeatResponse;
};

export class DashboardService {
  static readonly serviceName: string;
  static readonly WordOfDay: DashboardServiceWordOfDay;
  static readonly MyStatisticsOverwiev: DashboardServiceMyStatisticsOverwiev;
  static readonly WordsToRepeat: DashboardServiceWordsToRepeat;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DashboardServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  wordOfDay(
    requestMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.WordOfDayRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.WordOfDayResponse|null) => void
  ): UnaryResponse;
  wordOfDay(
    requestMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.WordOfDayRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.WordOfDayResponse|null) => void
  ): UnaryResponse;
  myStatisticsOverwiev(
    requestMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.MyStatisticsOverwievRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.MyStatisticsOverwievResponse|null) => void
  ): UnaryResponse;
  myStatisticsOverwiev(
    requestMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.MyStatisticsOverwievRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.MyStatisticsOverwievResponse|null) => void
  ): UnaryResponse;
  wordsToRepeat(
    requestMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.WordsToRepeatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.WordsToRepeatResponse|null) => void
  ): UnaryResponse;
  wordsToRepeat(
    requestMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.WordsToRepeatRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_dashboard_dashboard_service_pb.WordsToRepeatResponse|null) => void
  ): UnaryResponse;
}

