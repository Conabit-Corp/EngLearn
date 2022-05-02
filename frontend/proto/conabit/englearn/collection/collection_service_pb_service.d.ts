// package: conabit.englearn.collection
// file: proto/conabit/englearn/collection/collection_service.proto

import * as proto_conabit_englearn_collection_collection_service_pb from "../../../../proto/conabit/englearn/collection/collection_service_pb";
import * as proto_conabit_englearn_collection_collection_transport_pb from "../../../../proto/conabit/englearn/collection/collection_transport_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WordCollectionServiceCreateWordCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionResponse;
};

type WordCollectionServiceGetWordCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_transport_pb.GetWordCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_transport_pb.GetWordCollectionResponse;
};

type WordCollectionServiceCreateGroupWordCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_transport_pb.CreateGroupCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionResponse;
};

type WordCollectionServiceGetUserWordCollections = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_transport_pb.GetUserCollectionsRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_transport_pb.GetUserCollectionsResponse;
};

type WordCollectionServiceGetGroupWordCollections = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_transport_pb.GetGroupCollectionsRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_transport_pb.GetGroupCollectionsResponse;
};

type WordCollectionServiceDeleteWordCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_transport_pb.DeleteWordCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_transport_pb.DeleteWordCollectionResponse;
};

type WordCollectionServiceAddWordToCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_transport_pb.AddWordToCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_transport_pb.AddWordToCollectionResponse;
};

type WordCollectionServiceRemoveWordFromCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_transport_pb.RemoveWordFromCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_transport_pb.RemoveWordFromCollectionResponse;
};

type WordCollectionServiceEditWordFromCollection = {
  readonly methodName: string;
  readonly service: typeof WordCollectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_collection_collection_transport_pb.EditWordFromCollectionRequest;
  readonly responseType: typeof proto_conabit_englearn_collection_collection_transport_pb.EditWordFromCollectionResponse;
};

export class WordCollectionService {
  static readonly serviceName: string;
  static readonly CreateWordCollection: WordCollectionServiceCreateWordCollection;
  static readonly GetWordCollection: WordCollectionServiceGetWordCollection;
  static readonly CreateGroupWordCollection: WordCollectionServiceCreateGroupWordCollection;
  static readonly GetUserWordCollections: WordCollectionServiceGetUserWordCollections;
  static readonly GetGroupWordCollections: WordCollectionServiceGetGroupWordCollections;
  static readonly DeleteWordCollection: WordCollectionServiceDeleteWordCollection;
  static readonly AddWordToCollection: WordCollectionServiceAddWordToCollection;
  static readonly RemoveWordFromCollection: WordCollectionServiceRemoveWordFromCollection;
  static readonly EditWordFromCollection: WordCollectionServiceEditWordFromCollection;
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
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  createWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  getWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.GetWordCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.GetWordCollectionResponse|null) => void
  ): UnaryResponse;
  getWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.GetWordCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.GetWordCollectionResponse|null) => void
  ): UnaryResponse;
  createGroupWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.CreateGroupCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  createGroupWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.CreateGroupCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionResponse|null) => void
  ): UnaryResponse;
  getUserWordCollections(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.GetUserCollectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.GetUserCollectionsResponse|null) => void
  ): UnaryResponse;
  getUserWordCollections(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.GetUserCollectionsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.GetUserCollectionsResponse|null) => void
  ): UnaryResponse;
  getGroupWordCollections(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.GetGroupCollectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.GetGroupCollectionsResponse|null) => void
  ): UnaryResponse;
  getGroupWordCollections(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.GetGroupCollectionsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.GetGroupCollectionsResponse|null) => void
  ): UnaryResponse;
  deleteWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.DeleteWordCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.DeleteWordCollectionResponse|null) => void
  ): UnaryResponse;
  deleteWordCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.DeleteWordCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.DeleteWordCollectionResponse|null) => void
  ): UnaryResponse;
  addWordToCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.AddWordToCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.AddWordToCollectionResponse|null) => void
  ): UnaryResponse;
  addWordToCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.AddWordToCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.AddWordToCollectionResponse|null) => void
  ): UnaryResponse;
  removeWordFromCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.RemoveWordFromCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.RemoveWordFromCollectionResponse|null) => void
  ): UnaryResponse;
  removeWordFromCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.RemoveWordFromCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.RemoveWordFromCollectionResponse|null) => void
  ): UnaryResponse;
  editWordFromCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.EditWordFromCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.EditWordFromCollectionResponse|null) => void
  ): UnaryResponse;
  editWordFromCollection(
    requestMessage: proto_conabit_englearn_collection_collection_transport_pb.EditWordFromCollectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_collection_collection_transport_pb.EditWordFromCollectionResponse|null) => void
  ): UnaryResponse;
}

