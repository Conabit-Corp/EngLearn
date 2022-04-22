// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/exercise_service.proto

import * as proto_conabit_englearn_exercise_exercise_service_pb from "../../../../proto/conabit/englearn/exercise/exercise_service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ExerciseServiceStartNewExercise = {
  readonly methodName: string;
  readonly service: typeof ExerciseService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_exercise_exercise_service_pb.StartNewExerciseRequest;
  readonly responseType: typeof proto_conabit_englearn_exercise_exercise_service_pb.StartNewExerciseResponse;
};

type ExerciseServiceSolveTask = {
  readonly methodName: string;
  readonly service: typeof ExerciseService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_exercise_exercise_service_pb.SolveTaskRequest;
  readonly responseType: typeof proto_conabit_englearn_exercise_exercise_service_pb.SolveTaskResponse;
};

type ExerciseServiceFinishExercise = {
  readonly methodName: string;
  readonly service: typeof ExerciseService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_conabit_englearn_exercise_exercise_service_pb.FinishExerciseRequest;
  readonly responseType: typeof proto_conabit_englearn_exercise_exercise_service_pb.Exercise;
};

export class ExerciseService {
  static readonly serviceName: string;
  static readonly StartNewExercise: ExerciseServiceStartNewExercise;
  static readonly SolveTask: ExerciseServiceSolveTask;
  static readonly FinishExercise: ExerciseServiceFinishExercise;
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

export class ExerciseServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  startNewExercise(
    requestMessage: proto_conabit_englearn_exercise_exercise_service_pb.StartNewExerciseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_exercise_service_pb.StartNewExerciseResponse|null) => void
  ): UnaryResponse;
  startNewExercise(
    requestMessage: proto_conabit_englearn_exercise_exercise_service_pb.StartNewExerciseRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_exercise_service_pb.StartNewExerciseResponse|null) => void
  ): UnaryResponse;
  solveTask(
    requestMessage: proto_conabit_englearn_exercise_exercise_service_pb.SolveTaskRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_exercise_service_pb.SolveTaskResponse|null) => void
  ): UnaryResponse;
  solveTask(
    requestMessage: proto_conabit_englearn_exercise_exercise_service_pb.SolveTaskRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_exercise_service_pb.SolveTaskResponse|null) => void
  ): UnaryResponse;
  finishExercise(
    requestMessage: proto_conabit_englearn_exercise_exercise_service_pb.FinishExerciseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_exercise_service_pb.Exercise|null) => void
  ): UnaryResponse;
  finishExercise(
    requestMessage: proto_conabit_englearn_exercise_exercise_service_pb.FinishExerciseRequest,
    callback: (error: ServiceError|null, responseMessage: proto_conabit_englearn_exercise_exercise_service_pb.Exercise|null) => void
  ): UnaryResponse;
}

