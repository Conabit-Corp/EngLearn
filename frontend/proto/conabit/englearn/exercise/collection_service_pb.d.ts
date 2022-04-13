// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/collection_service.proto

import * as jspb from "google-protobuf";
import * as proto_conabit_englearn_common_session_pb from "../../../../proto/conabit/englearn/common/session_pb";
import * as proto_conabit_englearn_exercise_word_service_pb from "../../../../proto/conabit/englearn/exercise/word_service_pb";

export class WordCollection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearWordsList(): void;
  getWordsList(): Array<proto_conabit_englearn_exercise_word_service_pb.WordPair>;
  setWordsList(value: Array<proto_conabit_englearn_exercise_word_service_pb.WordPair>): void;
  addWords(value?: proto_conabit_englearn_exercise_word_service_pb.WordPair, index?: number): proto_conabit_englearn_exercise_word_service_pb.WordPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordCollection.AsObject;
  static toObject(includeInstance: boolean, msg: WordCollection): WordCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WordCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WordCollection;
  static deserializeBinaryFromReader(message: WordCollection, reader: jspb.BinaryReader): WordCollection;
}

export namespace WordCollection {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    wordsList: Array<proto_conabit_englearn_exercise_word_service_pb.WordPair.AsObject>,
  }
}

export class CreateWordCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  hasWordCollection(): boolean;
  clearWordCollection(): void;
  getWordCollection(): WordCollection | undefined;
  setWordCollection(value?: WordCollection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWordCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWordCollectionRequest): CreateWordCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWordCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWordCollectionRequest;
  static deserializeBinaryFromReader(message: CreateWordCollectionRequest, reader: jspb.BinaryReader): CreateWordCollectionRequest;
}

export namespace CreateWordCollectionRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    wordCollection?: WordCollection.AsObject,
  }
}

export class FindWordCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  getCollectionId(): string;
  setCollectionId(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindWordCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindWordCollectionRequest): FindWordCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindWordCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindWordCollectionRequest;
  static deserializeBinaryFromReader(message: FindWordCollectionRequest, reader: jspb.BinaryReader): FindWordCollectionRequest;
}

export namespace FindWordCollectionRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    collectionId: string,
    collectionName: string,
  }
}

