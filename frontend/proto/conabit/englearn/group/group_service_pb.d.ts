// package: conabit.englearn.group
// file: proto/conabit/englearn/group/group_service.proto

import * as jspb from "google-protobuf";
import * as proto_conabit_englearn_common_session_pb from "../../../../proto/conabit/englearn/common/session_pb";

export class CreateGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    name: string,
    userIdsList: Array<string>,
  }
}

export class CreateGroupResponse extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupResponse): CreateGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupResponse;
  static deserializeBinaryFromReader(message: CreateGroupResponse, reader: jspb.BinaryReader): CreateGroupResponse;
}

export namespace CreateGroupResponse {
  export type AsObject = {
    groupId: string,
  }
}

export class AddToGroupRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddToGroupRequest): AddToGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddToGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToGroupRequest;
  static deserializeBinaryFromReader(message: AddToGroupRequest, reader: jspb.BinaryReader): AddToGroupRequest;
}

export namespace AddToGroupRequest {
  export type AsObject = {
    groupId: string,
    userId: string,
  }
}

export class AddToGroupResponse extends jspb.Message {
  getInvationId(): string;
  setInvationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddToGroupResponse): AddToGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddToGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToGroupResponse;
  static deserializeBinaryFromReader(message: AddToGroupResponse, reader: jspb.BinaryReader): AddToGroupResponse;
}

export namespace AddToGroupResponse {
  export type AsObject = {
    invationId: string,
  }
}

export class MyInvationsRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyInvationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MyInvationsRequest): MyInvationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyInvationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyInvationsRequest;
  static deserializeBinaryFromReader(message: MyInvationsRequest, reader: jspb.BinaryReader): MyInvationsRequest;
}

export namespace MyInvationsRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
  }
}

export class JoinGroupRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupRequest): JoinGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupRequest;
  static deserializeBinaryFromReader(message: JoinGroupRequest, reader: jspb.BinaryReader): JoinGroupRequest;
}

export namespace JoinGroupRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    groupId: string,
  }
}

export class JoinGroupResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupResponse): JoinGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupResponse;
  static deserializeBinaryFromReader(message: JoinGroupResponse, reader: jspb.BinaryReader): JoinGroupResponse;
}

export namespace JoinGroupResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class RejectInvationRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectInvationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RejectInvationRequest): RejectInvationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RejectInvationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectInvationRequest;
  static deserializeBinaryFromReader(message: RejectInvationRequest, reader: jspb.BinaryReader): RejectInvationRequest;
}

export namespace RejectInvationRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
    groupId: string,
  }
}

export class RejectInvationReponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectInvationReponse.AsObject;
  static toObject(includeInstance: boolean, msg: RejectInvationReponse): RejectInvationReponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RejectInvationReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectInvationReponse;
  static deserializeBinaryFromReader(message: RejectInvationReponse, reader: jspb.BinaryReader): RejectInvationReponse;
}

export namespace RejectInvationReponse {
  export type AsObject = {
    success: boolean,
  }
}

export class MyGroupsRequest extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): proto_conabit_englearn_common_session_pb.Session | undefined;
  setSession(value?: proto_conabit_englearn_common_session_pb.Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MyGroupsRequest): MyGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyGroupsRequest;
  static deserializeBinaryFromReader(message: MyGroupsRequest, reader: jspb.BinaryReader): MyGroupsRequest;
}

export namespace MyGroupsRequest {
  export type AsObject = {
    session?: proto_conabit_englearn_common_session_pb.Session.AsObject,
  }
}

export class MyGroupsResponse extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<MyGroupsResponse.Group>;
  setGroupsList(value: Array<MyGroupsResponse.Group>): void;
  addGroups(value?: MyGroupsResponse.Group, index?: number): MyGroupsResponse.Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MyGroupsResponse): MyGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyGroupsResponse;
  static deserializeBinaryFromReader(message: MyGroupsResponse, reader: jspb.BinaryReader): MyGroupsResponse;
}

export namespace MyGroupsResponse {
  export type AsObject = {
    groupsList: Array<MyGroupsResponse.Group.AsObject>,
  }

  export class Group extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getGroupId(): string;
    setGroupId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Group.AsObject;
    static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Group;
    static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
  }

  export namespace Group {
    export type AsObject = {
      name: string,
      groupId: string,
    }
  }
}

export class GroudInvation extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getStatus(): GroudInvation.InvationStatusMap[keyof GroudInvation.InvationStatusMap];
  setStatus(value: GroudInvation.InvationStatusMap[keyof GroudInvation.InvationStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroudInvation.AsObject;
  static toObject(includeInstance: boolean, msg: GroudInvation): GroudInvation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroudInvation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroudInvation;
  static deserializeBinaryFromReader(message: GroudInvation, reader: jspb.BinaryReader): GroudInvation;
}

export namespace GroudInvation {
  export type AsObject = {
    groupId: string,
    status: GroudInvation.InvationStatusMap[keyof GroudInvation.InvationStatusMap],
  }

  export interface InvationStatusMap {
    CREATED: 0;
    ACCEPTED: 1;
    REJECTED: 2;
  }

  export const InvationStatus: InvationStatusMap;
}

