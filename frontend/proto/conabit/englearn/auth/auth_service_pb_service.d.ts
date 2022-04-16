// package: conabit.englearn.auth
// file: proto/conabit/englearn/auth/auth_service.proto

import * as proto_conabit_englearn_auth_auth_service_pb from "../../../../proto/conabit/englearn/auth/auth_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthServiceSignIn = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_auth_auth_service_pb.SignInRequest;
  readonly responseType: typeof proto_conabit_englearn_auth_auth_service_pb.AuthResponse;
};

type AuthServiceSignUp = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_auth_auth_service_pb.SignUpRequest;
  readonly responseType: typeof proto_conabit_englearn_auth_auth_service_pb.AuthResponse;
};

type AuthServiceLogout = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_auth_auth_service_pb.LogoutRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class AuthService {
  static readonly serviceName: string;
  static readonly SignIn: AuthServiceSignIn;
  static readonly SignUp: AuthServiceSignUp;
  static readonly Logout: AuthServiceLogout;
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

export class AuthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  signIn(
    requestMessage: proto_conabit_englearn_auth_auth_service_pb.SignInRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_auth_auth_service_pb.AuthResponse|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: proto_conabit_englearn_auth_auth_service_pb.SignInRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_auth_auth_service_pb.AuthResponse|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: proto_conabit_englearn_auth_auth_service_pb.SignUpRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_auth_auth_service_pb.AuthResponse|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: proto_conabit_englearn_auth_auth_service_pb.SignUpRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_auth_auth_service_pb.AuthResponse|null) => void
  ): UnaryResponse;
  logout(
    requestMessage: proto_conabit_englearn_auth_auth_service_pb.LogoutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  logout(
    requestMessage: proto_conabit_englearn_auth_auth_service_pb.LogoutRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

