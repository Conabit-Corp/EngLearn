// package: conabit.englearn.collection
// file: proto/conabit/englearn/collection/collection_service.proto

import * as jspb from "google-protobuf";
import * as proto_conabit_englearn_common_session_pb from "../../../../proto/conabit/englearn/common/session_pb";
import * as proto_conabit_englearn_collection_word_service_pb from "../../../../proto/conabit/englearn/collection/word_service_pb";

export class WordCollection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearWordsList(): void;
  getWordsList(): Array<proto_conabit_englearn_collection_word_service_pb.WordPair>;
  setWordsList(value: Array<proto_conabit_englearn_collection_word_service_pb.WordPair>): void;
  addWords(value?: proto_conabit_englearn_collection_word_service_pb.WordPair, index?: number): proto_conabit_englearn_collection_word_service_pb.WordPair;

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
    wordsList: Array<proto_conabit_englearn_collection_word_service_pb.WordPair.AsObject>,
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

export class CreateWordCollectionResponse extends jspb.Message {
  getCollectionId(): string;
  setCollectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWordCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWordCollectionResponse): CreateWordCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWordCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWordCollectionResponse;
  static deserializeBinaryFromReader(message: CreateWordCollectionResponse, reader: jspb.BinaryReader): CreateWordCollectionResponse;
}

export namespace CreateWordCollectionResponse {
  export type AsObject = {
    collectionId: string,
  }
}

export class GetWordCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  getCollectionId(): string;
  setCollectionId(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWordCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWordCollectionRequest): GetWordCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWordCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWordCollectionRequest;
  static deserializeBinaryFromReader(message: GetWordCollectionRequest, reader: jspb.BinaryReader): GetWordCollectionRequest;
}

export namespace GetWordCollectionRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    collectionId: string,
    collectionName: string,
  }
}

export class CreateGroupCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  hasWordcollection(): boolean;
  clearWordcollection(): void;
  getWordcollection(): WordCollection | undefined;
  setWordcollection(value?: WordCollection): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupCollectionRequest): CreateGroupCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupCollectionRequest;
  static deserializeBinaryFromReader(message: CreateGroupCollectionRequest, reader: jspb.BinaryReader): CreateGroupCollectionRequest;
}

export namespace CreateGroupCollectionRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    wordcollection?: WordCollection.AsObject,
    groupId: string,
  }
}

export class GetGroupCollectionsRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupCollectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupCollectionsRequest): GetGroupCollectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupCollectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupCollectionsRequest;
  static deserializeBinaryFromReader(message: GetGroupCollectionsRequest, reader: jspb.BinaryReader): GetGroupCollectionsRequest;
}

export namespace GetGroupCollectionsRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    groupId: string,
  }
}

export class GetGroupCollectionsResponse extends jspb.Message {
  clearCollectionsList(): void;
  getCollectionsList(): Array<WordCollection>;
  setCollectionsList(value: Array<WordCollection>): void;
  addCollections(value?: WordCollection, index?: number): WordCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupCollectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupCollectionsResponse): GetGroupCollectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupCollectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupCollectionsResponse;
  static deserializeBinaryFromReader(message: GetGroupCollectionsResponse, reader: jspb.BinaryReader): GetGroupCollectionsResponse;
}

export namespace GetGroupCollectionsResponse {
  export type AsObject = {
    collectionsList: Array<WordCollection.AsObject>,
  }
}

