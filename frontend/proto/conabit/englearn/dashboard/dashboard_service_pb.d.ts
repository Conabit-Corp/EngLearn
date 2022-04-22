// package: conabit.englearn.dashboard
// file: proto/conabit/englearn/dashboard/dashboard_service.proto

import * as jspb from "google-protobuf";
import * as proto_conabit_englearn_common_session_pb from "../../../../proto/conabit/englearn/common/session_pb";
import * as proto_conabit_englearn_collection_word_service_pb from "../../../../proto/conabit/englearn/collection/word_service_pb";

export class WordOfDayRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordOfDayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WordOfDayRequest): WordOfDayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WordOfDayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WordOfDayRequest;
  static deserializeBinaryFromReader(message: WordOfDayRequest, reader: jspb.BinaryReader): WordOfDayRequest;
}

export namespace WordOfDayRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
  }
}

export class WordOfDayResponse extends jspb.Message {
  hasWord(): boolean;
  clearWord(): void;
  getWord(): proto_conabit_englearn_collection_word_service_pb.WordPair | undefined;
  setWord(value?: proto_conabit_englearn_collection_word_service_pb.WordPair): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordOfDayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WordOfDayResponse): WordOfDayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WordOfDayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WordOfDayResponse;
  static deserializeBinaryFromReader(message: WordOfDayResponse, reader: jspb.BinaryReader): WordOfDayResponse;
}

export namespace WordOfDayResponse {
  export type AsObject = {
    word?: proto_conabit_englearn_collection_word_service_pb.WordPair.AsObject,
  }
}

export class MyStatisticsOverwievRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyStatisticsOverwievRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MyStatisticsOverwievRequest): MyStatisticsOverwievRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyStatisticsOverwievRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyStatisticsOverwievRequest;
  static deserializeBinaryFromReader(message: MyStatisticsOverwievRequest, reader: jspb.BinaryReader): MyStatisticsOverwievRequest;
}

export namespace MyStatisticsOverwievRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
  }
}

export class MyStatisticsOverwievResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyStatisticsOverwievResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MyStatisticsOverwievResponse): MyStatisticsOverwievResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyStatisticsOverwievResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyStatisticsOverwievResponse;
  static deserializeBinaryFromReader(message: MyStatisticsOverwievResponse, reader: jspb.BinaryReader): MyStatisticsOverwievResponse;
}

export namespace MyStatisticsOverwievResponse {
  export type AsObject = {
  }
}

export class WordsToRepeatRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordsToRepeatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WordsToRepeatRequest): WordsToRepeatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WordsToRepeatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WordsToRepeatRequest;
  static deserializeBinaryFromReader(message: WordsToRepeatRequest, reader: jspb.BinaryReader): WordsToRepeatRequest;
}

export namespace WordsToRepeatRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
  }
}

export class WordsToRepeatResponse extends jspb.Message {
  clearWordList(): void;
  getWordList(): Array<proto_conabit_englearn_collection_word_service_pb.WordPair>;
  setWordList(value: Array<proto_conabit_englearn_collection_word_service_pb.WordPair>): void;
  addWord(value?: proto_conabit_englearn_collection_word_service_pb.WordPair, index?: number): proto_conabit_englearn_collection_word_service_pb.WordPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordsToRepeatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WordsToRepeatResponse): WordsToRepeatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WordsToRepeatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WordsToRepeatResponse;
  static deserializeBinaryFromReader(message: WordsToRepeatResponse, reader: jspb.BinaryReader): WordsToRepeatResponse;
}

export namespace WordsToRepeatResponse {
  export type AsObject = {
    wordList: Array<proto_conabit_englearn_collection_word_service_pb.WordPair.AsObject>,
  }
}

