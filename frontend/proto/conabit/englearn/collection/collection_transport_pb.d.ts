// package: conabit.englearn.collection
// file: proto/conabit/englearn/collection/collection_transport.proto

import * as jspb from "google-protobuf";
import * as proto_conabit_englearn_common_session_pb from "../../../../proto/conabit/englearn/common/session_pb";
import * as proto_conabit_englearn_collection_collection_models_pb from "../../../../proto/conabit/englearn/collection/collection_models_pb";

export class CreateWordCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  hasWordCollection(): boolean;
  clearWordCollection(): void;
  getWordCollection(): proto_conabit_englearn_collection_collection_models_pb.WordCollection | undefined;
  setWordCollection(value?: proto_conabit_englearn_collection_collection_models_pb.WordCollection): void;

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
    wordCollection?: proto_conabit_englearn_collection_collection_models_pb.WordCollection.AsObject,
  }
}

export class CreateGroupCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  hasWordcollection(): boolean;
  clearWordcollection(): void;
  getWordcollection(): proto_conabit_englearn_collection_collection_models_pb.WordCollection | undefined;
  setWordcollection(value?: proto_conabit_englearn_collection_collection_models_pb.WordCollection): void;

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
    wordcollection?: proto_conabit_englearn_collection_collection_models_pb.WordCollection.AsObject,
    groupId: string,
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

export class GetWordCollectionResponse extends jspb.Message {
  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): proto_conabit_englearn_collection_collection_models_pb.WordCollection | undefined;
  setCollection(value?: proto_conabit_englearn_collection_collection_models_pb.WordCollection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWordCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWordCollectionResponse): GetWordCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWordCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWordCollectionResponse;
  static deserializeBinaryFromReader(message: GetWordCollectionResponse, reader: jspb.BinaryReader): GetWordCollectionResponse;
}

export namespace GetWordCollectionResponse {
  export type AsObject = {
    collection?: proto_conabit_englearn_collection_collection_models_pb.WordCollection.AsObject,
  }
}

export class GetUserCollectionsRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserCollectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserCollectionsRequest): GetUserCollectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserCollectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserCollectionsRequest;
  static deserializeBinaryFromReader(message: GetUserCollectionsRequest, reader: jspb.BinaryReader): GetUserCollectionsRequest;
}

export namespace GetUserCollectionsRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
  }
}

export class GetUserCollectionsResponse extends jspb.Message {
  hasCollections(): boolean;
  clearCollections(): void;
  getCollections(): proto_conabit_englearn_collection_collection_models_pb.CollectionsOverview | undefined;
  setCollections(value?: proto_conabit_englearn_collection_collection_models_pb.CollectionsOverview): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserCollectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserCollectionsResponse): GetUserCollectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserCollectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserCollectionsResponse;
  static deserializeBinaryFromReader(message: GetUserCollectionsResponse, reader: jspb.BinaryReader): GetUserCollectionsResponse;
}

export namespace GetUserCollectionsResponse {
  export type AsObject = {
    collections?: proto_conabit_englearn_collection_collection_models_pb.CollectionsOverview.AsObject,
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
  hasCollections(): boolean;
  clearCollections(): void;
  getCollections(): proto_conabit_englearn_collection_collection_models_pb.CollectionsOverview | undefined;
  setCollections(value?: proto_conabit_englearn_collection_collection_models_pb.CollectionsOverview): void;

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
    collections?: proto_conabit_englearn_collection_collection_models_pb.CollectionsOverview.AsObject,
  }
}

export class DeleteWordCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  getCollectionId(): string;
  setCollectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWordCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWordCollectionRequest): DeleteWordCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWordCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWordCollectionRequest;
  static deserializeBinaryFromReader(message: DeleteWordCollectionRequest, reader: jspb.BinaryReader): DeleteWordCollectionRequest;
}

export namespace DeleteWordCollectionRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    collectionId: string,
  }
}

export class DeleteWordCollectionResponse extends jspb.Message {
  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): proto_conabit_englearn_collection_collection_models_pb.WordCollection | undefined;
  setCollection(value?: proto_conabit_englearn_collection_collection_models_pb.WordCollection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWordCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWordCollectionResponse): DeleteWordCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWordCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWordCollectionResponse;
  static deserializeBinaryFromReader(message: DeleteWordCollectionResponse, reader: jspb.BinaryReader): DeleteWordCollectionResponse;
}

export namespace DeleteWordCollectionResponse {
  export type AsObject = {
    collection?: proto_conabit_englearn_collection_collection_models_pb.WordCollection.AsObject,
  }
}

export class AddWordToCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  getCollectionId(): string;
  setCollectionId(value: string): void;

  hasWordPair(): boolean;
  clearWordPair(): void;
  getWordPair(): proto_conabit_englearn_collection_collection_models_pb.WordPair | undefined;
  setWordPair(value?: proto_conabit_englearn_collection_collection_models_pb.WordPair): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWordToCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddWordToCollectionRequest): AddWordToCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddWordToCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWordToCollectionRequest;
  static deserializeBinaryFromReader(message: AddWordToCollectionRequest, reader: jspb.BinaryReader): AddWordToCollectionRequest;
}

export namespace AddWordToCollectionRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    collectionId: string,
    wordPair?: proto_conabit_englearn_collection_collection_models_pb.WordPair.AsObject,
  }
}

export class AddWordToCollectionResponse extends jspb.Message {
  getWordPairId(): string;
  setWordPairId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWordToCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddWordToCollectionResponse): AddWordToCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddWordToCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWordToCollectionResponse;
  static deserializeBinaryFromReader(message: AddWordToCollectionResponse, reader: jspb.BinaryReader): AddWordToCollectionResponse;
}

export namespace AddWordToCollectionResponse {
  export type AsObject = {
    wordPairId: string,
  }
}

export class RemoveWordFromCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  getWordPairId(): string;
  setWordPairId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWordFromCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWordFromCollectionRequest): RemoveWordFromCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveWordFromCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWordFromCollectionRequest;
  static deserializeBinaryFromReader(message: RemoveWordFromCollectionRequest, reader: jspb.BinaryReader): RemoveWordFromCollectionRequest;
}

export namespace RemoveWordFromCollectionRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    wordPairId: string,
  }
}

export class RemoveWordFromCollectionResponse extends jspb.Message {
  hasWordPair(): boolean;
  clearWordPair(): void;
  getWordPair(): proto_conabit_englearn_collection_collection_models_pb.WordPair | undefined;
  setWordPair(value?: proto_conabit_englearn_collection_collection_models_pb.WordPair): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWordFromCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWordFromCollectionResponse): RemoveWordFromCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveWordFromCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWordFromCollectionResponse;
  static deserializeBinaryFromReader(message: RemoveWordFromCollectionResponse, reader: jspb.BinaryReader): RemoveWordFromCollectionResponse;
}

export namespace RemoveWordFromCollectionResponse {
  export type AsObject = {
    wordPair?: proto_conabit_englearn_collection_collection_models_pb.WordPair.AsObject,
  }
}

export class EditWordFromCollectionRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  hasWordPair(): boolean;
  clearWordPair(): void;
  getWordPair(): proto_conabit_englearn_collection_collection_models_pb.WordPair | undefined;
  setWordPair(value?: proto_conabit_englearn_collection_collection_models_pb.WordPair): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditWordFromCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditWordFromCollectionRequest): EditWordFromCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditWordFromCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditWordFromCollectionRequest;
  static deserializeBinaryFromReader(message: EditWordFromCollectionRequest, reader: jspb.BinaryReader): EditWordFromCollectionRequest;
}

export namespace EditWordFromCollectionRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    wordPair?: proto_conabit_englearn_collection_collection_models_pb.WordPair.AsObject,
  }
}

export class EditWordFromCollectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditWordFromCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditWordFromCollectionResponse): EditWordFromCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditWordFromCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditWordFromCollectionResponse;
  static deserializeBinaryFromReader(message: EditWordFromCollectionResponse, reader: jspb.BinaryReader): EditWordFromCollectionResponse;
}

export namespace EditWordFromCollectionResponse {
  export type AsObject = {
  }
}

