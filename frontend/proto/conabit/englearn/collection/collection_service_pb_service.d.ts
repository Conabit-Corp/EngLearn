// package: conabit.englearn.collection
// file: proto/conabit/englearn/collection/collection_service.proto

import * as proto_conabit_englearn_collection_collection_service_pb from "../../../../proto/conabit/englearn/collection/collection_service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WordCollectionServiceCreateWordCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse;
};

type WordCollectionServiceUpdateWordCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse;
};

type WordCollectionServiceGetWordCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_service_pb.GetWordCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_service_pb.WordCollection;
};

type WordCollectionServiceCreateGroupWordCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_service_pb.CreateGroupCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse;
};

type WordCollectionServiceGetGroupWordCollections = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_service_pb.GetGroupCollectionsRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_service_pb.GetGroupCollectionsResponse;
};

export class WordCollectionService {
  static readonly serviceName: string;
  static readonly CreateWordCollection: WordCollectionServiceCreateWordCollection;
  static readonly UpdateWordCollection: WordCollectionServiceUpdateWordCollection;
  static readonly GetWordCollection: WordCollectionServiceGetWordCollection;
  static readonly CreateGroupWordCollection: WordCollectionServiceCreateGroupWordCollection;
  static readonly GetGroupWordCollections: WordCollectionServiceGetGroupWordCollections;
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

export class WordCollectionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  createWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  updateWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  updateWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  getWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.GetWordCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.WordCollection|null) => void
  ): UnaryResponse;
  getWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.GetWordCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.WordCollection|null) => void
  ): UnaryResponse;
  createGroupWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.CreateGroupCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  createGroupWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.CreateGroupCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  getGroupWordCollections(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.GetGroupCollectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.GetGroupCollectionsResponse|null) => void
  ): UnaryResponse;
  getGroupWordCollections(
    requestMessage: proto_conabit_englearn_collection_collection_service_pb.GetGroupCollectionsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_service_pb.GetGroupCollectionsResponse|null) => void
  ): UnaryResponse;
}

