// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/exercise_service.proto

import * as jspb from "google-protobuf";
import * as proto_conabit_englearn_collection_word_service_pb from "../../../../proto/conabit/englearn/collection/word_service_pb";
import * as proto_conabit_englearn_common_session_pb from "../../../../proto/conabit/englearn/common/session_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Exercise extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasStartedAt(): boolean;
  clearStartedAt(): void;
  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishedAt(): boolean;
  clearFinishedAt(): void;
  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearSolvedTasksList(): void;
  getSolvedTasksList(): Array<Task>;
  setSolvedTasksList(value: Array<Task>): void;
  addSolvedTasks(value?: Task, index?: number): Task;

  clearFailedTasksList(): void;
  getFailedTasksList(): Array<Task>;
  setFailedTasksList(value: Array<Task>): void;
  addFailedTasks(value?: Task, index?: number): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exercise.AsObject;
  static toObject(includeInstance: boolean, msg: Exercise): Exercise.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Exercise, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exercise;
  static deserializeBinaryFromReader(message: Exercise, reader: jspb.BinaryReader): Exercise;
}

export namespace Exercise {
  export type AsObject = {
    id: string,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    solvedTasksList: Array<Task.AsObject>,
    failedTasksList: Array<Task.AsObject>,
  }
}

export class StartNewExerciseRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  getGenType(): StartNewExerciseRequest.GenerationTypeMap[keyof StartNewExerciseRequest.GenerationTypeMap];
  setGenType(value: StartNewExerciseRequest.GenerationTypeMap[keyof StartNewExerciseRequest.GenerationTypeMap]): void;

  clearWordsList(): void;
  getWordsList(): Array<proto_conabit_englearn_collection_word_service_pb.WordPair>;
  setWordsList(value: Array<proto_conabit_englearn_collection_word_service_pb.WordPair>): void;
  addWords(value?: proto_conabit_englearn_collection_word_service_pb.WordPair, index?: number): proto_conabit_englearn_collection_word_service_pb.WordPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartNewExerciseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartNewExerciseRequest): StartNewExerciseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartNewExerciseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartNewExerciseRequest;
  static deserializeBinaryFromReader(message: StartNewExerciseRequest, reader: jspb.BinaryReader): StartNewExerciseRequest;
}

export namespace StartNewExerciseRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    genType: StartNewExerciseRequest.GenerationTypeMap[keyof StartNewExerciseRequest.GenerationTypeMap],
    wordsList: Array<proto_conabit_englearn_collection_word_service_pb.WordPair.AsObject>,
  }

  export interface GenerationTypeMap {
    OLD: 0;
    MY_CHOISE: 1;
    REPEAT: 2;
  }

  export const GenerationType: GenerationTypeMap;
}

export class StartNewExerciseResponse extends jspb.Message {
  clearTasksList(): void;
  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): void;
  addTasks(value?: Task, index?: number): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartNewExerciseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartNewExerciseResponse): StartNewExerciseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartNewExerciseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartNewExerciseResponse;
  static deserializeBinaryFromReader(message: StartNewExerciseResponse, reader: jspb.BinaryReader): StartNewExerciseResponse;
}

export namespace StartNewExerciseResponse {
  export type AsObject = {
    tasksList: Array<Task.AsObject>,
  }
}

export class FinishExerciseRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  clearTasksList(): void;
  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): void;
  addTasks(value?: Task, index?: number): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishExerciseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishExerciseRequest): FinishExerciseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinishExerciseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishExerciseRequest;
  static deserializeBinaryFromReader(message: FinishExerciseRequest, reader: jspb.BinaryReader): FinishExerciseRequest;
}

export namespace FinishExerciseRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    tasksList: Array<Task.AsObject>,
  }
}

export class SolveTaskRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  hasTask(): boolean;
  clearTask(): void;
  getTask(): Task | undefined;
  setTask(value?: Task): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SolveTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SolveTaskRequest): SolveTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SolveTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SolveTaskRequest;
  static deserializeBinaryFromReader(message: SolveTaskRequest, reader: jspb.BinaryReader): SolveTaskRequest;
}

export namespace SolveTaskRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    task?: Task.AsObject,
  }
}

export class SolveTaskResponse extends jspb.Message {
  getSolved(): boolean;
  setSolved(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SolveTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SolveTaskResponse): SolveTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SolveTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SolveTaskResponse;
  static deserializeBinaryFromReader(message: SolveTaskResponse, reader: jspb.BinaryReader): SolveTaskResponse;
}

export namespace SolveTaskResponse {
  export type AsObject = {
    solved: boolean,
  }
}

export class Task extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAnswer(): string;
  setAnswer(value: string): void;

  hasWord(): boolean;
  clearWord(): void;
  getWord(): proto_conabit_englearn_collection_word_service_pb.Word | undefined;
  setWord(value?: proto_conabit_englearn_collection_word_service_pb.Word): void;

  getPairId(): string;
  setPairId(value: string): void;

  getTaskType(): Task.TaskTypeMap[keyof Task.TaskTypeMap];
  setTaskType(value: Task.TaskTypeMap[keyof Task.TaskTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    id: string,
    answer: string,
    word?: proto_conabit_englearn_collection_word_service_pb.Word.AsObject,
    pairId: string,
    taskType: Task.TaskTypeMap[keyof Task.TaskTypeMap],
  }

  export interface TaskTypeMap {
    JUST_INPUT: 0;
    ONE_OF_N: 1;
    N_OF_N: 2;
  }

  export const TaskType: TaskTypeMap;
}

