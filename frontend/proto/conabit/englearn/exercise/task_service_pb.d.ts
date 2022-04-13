// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/task_service.proto

import * as jspb from "google-protobuf";
import * as proto_conabit_englearn_exercise_word_service_pb from "../../../../proto/conabit/englearn/exercise/word_service_pb";
import * as proto_conabit_englearn_common_session_pb from "../../../../proto/conabit/englearn/common/session_pb";

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
  getWord(): proto_conabit_englearn_exercise_word_service_pb.Word | undefined;
  setWord(value?: proto_conabit_englearn_exercise_word_service_pb.Word): void;

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
    word?: proto_conabit_englearn_exercise_word_service_pb.Word.AsObject,
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

