// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/word_service.proto

import * as jspb from "google-protobuf";
import * as proto_conabit_englearn_common_session_pb from "../../../../proto/conabit/englearn/common/session_pb";

export class WordPair extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasWord1(): boolean;
  clearWord1(): void;
  getWord1(): Word | undefined;
  setWord1(value?: Word): void;

  hasWord2(): boolean;
  clearWord2(): void;
  getWord2(): Word | undefined;
  setWord2(value?: Word): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordPair.AsObject;
  static toObject(includeInstance: boolean, msg: WordPair): WordPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WordPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WordPair;
  static deserializeBinaryFromReader(message: WordPair, reader: jspb.BinaryReader): WordPair;
}

export namespace WordPair {
  export type AsObject = {
    id: string,
    word1?: Word.AsObject,
    word2?: Word.AsObject,
  }
}

export class Word extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getWordValue(): string;
  setWordValue(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Word.AsObject;
  static toObject(includeInstance: boolean, msg: Word): Word.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Word, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Word;
  static deserializeBinaryFromReader(message: Word, reader: jspb.BinaryReader): Word;
}

export namespace Word {
  export type AsObject = {
    id: string,
    wordValue: string,
    countryCode: string,
  }
}

export class RegisterWordPairRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  hasWordPair(): boolean;
  clearWordPair(): void;
  getWordPair(): WordPair | undefined;
  setWordPair(value?: WordPair): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterWordPairRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterWordPairRequest): RegisterWordPairRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterWordPairRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterWordPairRequest;
  static deserializeBinaryFromReader(message: RegisterWordPairRequest, reader: jspb.BinaryReader): RegisterWordPairRequest;
}

export namespace RegisterWordPairRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    wordPair?: WordPair.AsObject,
  }
}

export class CloneWordPairRequest extends jspb.Message {
  hasSesion(): boolean;
  clearSesion(): void;
  getSesion(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSesion(value?: proto_conabit_englearn_common_session_pb.Session): void;

  hasWordPair(): boolean;
  clearWordPair(): void;
  getWordPair(): WordPair | undefined;
  setWordPair(value?: WordPair): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloneWordPairRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloneWordPairRequest): CloneWordPairRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloneWordPairRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloneWordPairRequest;
  static deserializeBinaryFromReader(message: CloneWordPairRequest, reader: jspb.BinaryReader): CloneWordPairRequest;
}

export namespace CloneWordPairRequest {
  export type AsObject = {
    sesion?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    wordPair?: WordPair.AsObject,
  }
}

