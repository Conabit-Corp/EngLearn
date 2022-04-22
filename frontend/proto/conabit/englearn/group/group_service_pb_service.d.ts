// package: conabit.englearn.group
// file: proto/conabit/englearn/group/group_service.proto

import * as proto_conabit_englearn_group_group_service_pb from "../../../../proto/conabit/englearn/group/group_service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GroupServiceCreateGroup = {
  readonly methodName: string;
  readonly service: typeof GroupService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_group_group_service_pb.CreateGroupRequest;
  readonly responseType: typeof proto_conabit_englearn_group_group_service_pb.CreateGroupResponse;
};

type GroupServiceAddToGroup = {
  readonly methodName: string;
  readonly service: typeof GroupService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_group_group_service_pb.AddToGroupRequest;
  readonly responseType: typeof proto_conabit_englearn_group_group_service_pb.AddToGroupResponse;
};

type GroupServiceMyInvations = {
  readonly methodName: string;
  readonly service: typeof GroupService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_conabit_englearn_group_group_service_pb.MyInvationsRequest;
  readonly responseType: typeof proto_conabit_englearn_group_group_service_pb.GroudInvation;
};

type GroupServiceJoinGroup = {
  readonly methodName: string;
  readonly service: typeof GroupService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_group_group_service_pb.JoinGroupRequest;
  readonly responseType: typeof proto_conabit_englearn_group_group_service_pb.JoinGroupResponse;
};

type GroupServiceRejectInvation = {
  readonly methodName: string;
  readonly service: typeof GroupService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_group_group_service_pb.RejectInvationRequest;
  readonly responseType: typeof proto_conabit_englearn_group_group_service_pb.RejectInvationReponse;
};

type GroupServiceMyGroups = {
  readonly methodName: string;
  readonly service: typeof GroupService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_group_group_service_pb.MyGroupsRequest;
  readonly responseType: typeof proto_conabit_englearn_group_group_service_pb.MyGroupsResponse;
};

export class GroupService {
  static readonly serviceName: string;
  static readonly CreateGroup: GroupServiceCreateGroup;
  static readonly AddToGroup: GroupServiceAddToGroup;
  static readonly MyInvations: GroupServiceMyInvations;
  static readonly JoinGroup: GroupServiceJoinGroup;
  static readonly RejectInvation: GroupServiceRejectInvation;
  static readonly MyGroups: GroupServiceMyGroups;
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

export class GroupServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createGroup(
    requestMessage: proto_conabit_englearn_group_group_service_pb.CreateGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.CreateGroupResponse|null) => void
  ): UnaryResponse;
  createGroup(
    requestMessage: proto_conabit_englearn_group_group_service_pb.CreateGroupRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.CreateGroupResponse|null) => void
  ): UnaryResponse;
  addToGroup(
    requestMessage: proto_conabit_englearn_group_group_service_pb.AddToGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.AddToGroupResponse|null) => void
  ): UnaryResponse;
  addToGroup(
    requestMessage: proto_conabit_englearn_group_group_service_pb.AddToGroupRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.AddToGroupResponse|null) => void
  ): UnaryResponse;
  myInvations(requestMessage: proto_conabit_englearn_group_group_service_pb.MyInvationsRequest, metadata?: grpc.Metadata): ResponseStream<proto_conabit_englearn_group_group_service_pb.GroudInvation>;
  joinGroup(
    requestMessage: proto_conabit_englearn_group_group_service_pb.JoinGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.JoinGroupResponse|null) => void
  ): UnaryResponse;
  joinGroup(
    requestMessage: proto_conabit_englearn_group_group_service_pb.JoinGroupRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.JoinGroupResponse|null) => void
  ): UnaryResponse;
  rejectInvation(
    requestMessage: proto_conabit_englearn_group_group_service_pb.RejectInvationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.RejectInvationReponse|null) => void
  ): UnaryResponse;
  rejectInvation(
    requestMessage: proto_conabit_englearn_group_group_service_pb.RejectInvationRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.RejectInvationReponse|null) => void
  ): UnaryResponse;
  myGroups(
    requestMessage: proto_conabit_englearn_group_group_service_pb.MyGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.MyGroupsResponse|null) => void
  ): UnaryResponse;
  myGroups(
    requestMessage: proto_conabit_englearn_group_group_service_pb.MyGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_group_group_service_pb.MyGroupsResponse|null) => void
  ): UnaryResponse;
}

