// package: conabit.englearn.collection
// file: proto/conabit/englearn/collection/collection_models.proto

import * as jspb from "google-protobuf";

export class WordCollection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCountryCode1(): string;
  setCountryCode1(value: string): void;

  getCountryCode2(): string;
  setCountryCode2(value: string): void;

  clearWordsList(): void;
  getWordsList(): Array<WordPair>;
  setWordsList(value: Array<WordPair>): void;
  addWords(value?: WordPair, index?: number): WordPair;

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
    countryCode1: string,
    countryCode2: string,
    wordsList: Array<WordPair.AsObject>,
  }
}

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
  getCountryCode(): string;
  setCountryCode(value: string): void;

  getValue(): string;
  setValue(value: string): void;

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
    countryCode: string,
    value: string,
  }
}

export class CollectionsOverview extends jspb.Message {
  clearCollectionsList(): void;
  getCollectionsList(): Array<CollectionsOverview.Overview>;
  setCollectionsList(value: Array<CollectionsOverview.Overview>): void;
  addCollections(value?: CollectionsOverview.Overview, index?: number): CollectionsOverview.Overview;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionsOverview.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionsOverview): CollectionsOverview.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionsOverview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionsOverview;
  static deserializeBinaryFromReader(message: CollectionsOverview, reader: jspb.BinaryReader): CollectionsOverview;
}

export namespace CollectionsOverview {
  export type AsObject = {
    collectionsList: Array<CollectionsOverview.Overview.AsObject>,
  }

  export class Overview extends jspb.Message {
    getCollectionId(): string;
    setCollectionId(value: string): void;

    getCollectionName(): string;
    setCollectionName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Overview.AsObject;
    static toObject(includeInstance: boolean, msg: Overview): Overview.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Overview, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Overview;
    static deserializeBinaryFromReader(message: Overview, reader: jspb.BinaryReader): Overview;
  }

  export namespace Overview {
    export type AsObject = {
      collectionId: string,
      collectionName: string,
    }
  }
}

