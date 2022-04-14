// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/word_service.proto

import * as proto_conabit_englearn_exercise_word_service_pb from "../../../../proto/conabit/englearn/exercise/word_service_pb";
import * as proto_conabit_englearn_common_session_pb from "../../../../proto/conabit/englearn/common/session_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WordServiceRegisterWordPair = {
  readonly methodName: string;
  readonly service: typeof WordService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_exercise_word_service_pb.RegisterWordPairRequest;
  readonly responseType: typeof proto_conabit_englearn_exercise_word_service_pb.WordPair;
};

type WordServiceCloneWordPair = {
  readonly methodName: string;
  readonly service: typeof WordService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_exercise_word_service_pb.CloneWordPairRequest;
  readonly responseType: typeof proto_conabit_englearn_exercise_word_service_pb.WordPair;
};

type WordServiceFindUserWords = {
  readonly methodName: string;
  readonly service: typeof WordService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_conabit_englearn_common_session_pb.Session;
  readonly responseType: typeof proto_conabit_englearn_exercise_word_service_pb.WordPair;
};

export class WordService {
  static readonly serviceName: string;
  static readonly RegisterWordPair: WordServiceRegisterWordPair;
  static readonly CloneWordPair: WordServiceCloneWordPair;
  static readonly FindUserWords: WordServiceFindUserWords;
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

export class WordServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  registerWordPair(
    requestMessage: proto_conabit_englearn_exercise_word_service_pb.RegisterWordPairRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_word_service_pb.WordPair|null) => void
  ): UnaryResponse;
  registerWordPair(
    requestMessage: proto_conabit_englearn_exercise_word_service_pb.RegisterWordPairRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_word_service_pb.WordPair|null) => void
  ): UnaryResponse;
  cloneWordPair(
    requestMessage: proto_conabit_englearn_exercise_word_service_pb.CloneWordPairRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_word_service_pb.WordPair|null) => void
  ): UnaryResponse;
  cloneWordPair(
    requestMessage: proto_conabit_englearn_exercise_word_service_pb.CloneWordPairRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_word_service_pb.WordPair|null) => void
  ): UnaryResponse;
  findUserWords(requestMessage: proto_conabit_englearn_common_session_pb.Session, metadata?: grpc.Metadata): ResponseStream<proto_conabit_englearn_exercise_word_service_pb.WordPair>;
}

