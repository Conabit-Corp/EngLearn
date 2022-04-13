// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.15.8
// source: proto/conabit/englearn/exercise/exercise_service.proto

package exercise

import (
	context "context"
	common "github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/common"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type StartNewExerciseRequest_GenerationType int32

const (
	StartNewExerciseRequest_OLD       StartNewExerciseRequest_GenerationType = 0
	StartNewExerciseRequest_MY_CHOISE StartNewExerciseRequest_GenerationType = 1
	StartNewExerciseRequest_REPEAT    StartNewExerciseRequest_GenerationType = 2
)

// Enum value maps for StartNewExerciseRequest_GenerationType.
var (
	StartNewExerciseRequest_GenerationType_name = map[int32]string{
		0: "OLD",
		1: "MY_CHOISE",
		2: "REPEAT",
	}
	StartNewExerciseRequest_GenerationType_value = map[string]int32{
		"OLD":       0,
		"MY_CHOISE": 1,
		"REPEAT":    2,
	}
)

func (x StartNewExerciseRequest_GenerationType) Enum() *StartNewExerciseRequest_GenerationType {
	p := new(StartNewExerciseRequest_GenerationType)
	*p = x
	return p
}

func (x StartNewExerciseRequest_GenerationType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (StartNewExerciseRequest_GenerationType) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_conabit_englearn_exercise_exercise_service_proto_enumTypes[0].Descriptor()
}

func (StartNewExerciseRequest_GenerationType) Type() protoreflect.EnumType {
	return &file_proto_conabit_englearn_exercise_exercise_service_proto_enumTypes[0]
}

func (x StartNewExerciseRequest_GenerationType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use StartNewExerciseRequest_GenerationType.Descriptor instead.
func (StartNewExerciseRequest_GenerationType) EnumDescriptor() ([]byte, []int) {
	return file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescGZIP(), []int{1, 0}
}

type Exercise struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	StartedAt   *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=started_at,json=startedAt,proto3" json:"started_at,omitempty"`
	FinishedAt  *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=finished_at,json=finishedAt,proto3" json:"finished_at,omitempty"`
	SolvedTasks []*Task                `protobuf:"bytes,4,rep,name=solved_tasks,json=solvedTasks,proto3" json:"solved_tasks,omitempty"`
	FailedTasks []*Task                `protobuf:"bytes,5,rep,name=failed_tasks,json=failedTasks,proto3" json:"failed_tasks,omitempty"`
}

func (x *Exercise) Reset() {
	*x = Exercise{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Exercise) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Exercise) ProtoMessage() {}

func (x *Exercise) ProtoReflect() protoreflect.Message {
	mi := &file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Exercise.ProtoReflect.Descriptor instead.
func (*Exercise) Descriptor() ([]byte, []int) {
	return file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescGZIP(), []int{0}
}

func (x *Exercise) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Exercise) GetStartedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.StartedAt
	}
	return nil
}

func (x *Exercise) GetFinishedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.FinishedAt
	}
	return nil
}

func (x *Exercise) GetSolvedTasks() []*Task {
	if x != nil {
		return x.SolvedTasks
	}
	return nil
}

func (x *Exercise) GetFailedTasks() []*Task {
	if x != nil {
		return x.FailedTasks
	}
	return nil
}

type StartNewExerciseRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Session *common.Session                        `protobuf:"bytes,1,opt,name=session,proto3" json:"session,omitempty"`
	GenType StartNewExerciseRequest_GenerationType `protobuf:"varint,2,opt,name=gen_type,json=genType,proto3,enum=conabit.englearn.exercise.StartNewExerciseRequest_GenerationType" json:"gen_type,omitempty"`
	Words   []*WordPair                            `protobuf:"bytes,3,rep,name=words,proto3" json:"words,omitempty"`
}

func (x *StartNewExerciseRequest) Reset() {
	*x = StartNewExerciseRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StartNewExerciseRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StartNewExerciseRequest) ProtoMessage() {}

func (x *StartNewExerciseRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StartNewExerciseRequest.ProtoReflect.Descriptor instead.
func (*StartNewExerciseRequest) Descriptor() ([]byte, []int) {
	return file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescGZIP(), []int{1}
}

func (x *StartNewExerciseRequest) GetSession() *common.Session {
	if x != nil {
		return x.Session
	}
	return nil
}

func (x *StartNewExerciseRequest) GetGenType() StartNewExerciseRequest_GenerationType {
	if x != nil {
		return x.GenType
	}
	return StartNewExerciseRequest_OLD
}

func (x *StartNewExerciseRequest) GetWords() []*WordPair {
	if x != nil {
		return x.Words
	}
	return nil
}

type StartNewExerciseResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tasks []*Task `protobuf:"bytes,1,rep,name=tasks,proto3" json:"tasks,omitempty"`
}

func (x *StartNewExerciseResponse) Reset() {
	*x = StartNewExerciseResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StartNewExerciseResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StartNewExerciseResponse) ProtoMessage() {}

func (x *StartNewExerciseResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StartNewExerciseResponse.ProtoReflect.Descriptor instead.
func (*StartNewExerciseResponse) Descriptor() ([]byte, []int) {
	return file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescGZIP(), []int{2}
}

func (x *StartNewExerciseResponse) GetTasks() []*Task {
	if x != nil {
		return x.Tasks
	}
	return nil
}

type FinishExerciseRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Session *common.Session `protobuf:"bytes,1,opt,name=session,proto3" json:"session,omitempty"`
	Tasks   []*Task         `protobuf:"bytes,2,rep,name=tasks,proto3" json:"tasks,omitempty"`
}

func (x *FinishExerciseRequest) Reset() {
	*x = FinishExerciseRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FinishExerciseRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FinishExerciseRequest) ProtoMessage() {}

func (x *FinishExerciseRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FinishExerciseRequest.ProtoReflect.Descriptor instead.
func (*FinishExerciseRequest) Descriptor() ([]byte, []int) {
	return file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescGZIP(), []int{3}
}

func (x *FinishExerciseRequest) GetSession() *common.Session {
	if x != nil {
		return x.Session
	}
	return nil
}

func (x *FinishExerciseRequest) GetTasks() []*Task {
	if x != nil {
		return x.Tasks
	}
	return nil
}

var File_proto_conabit_englearn_exercise_exercise_service_proto protoreflect.FileDescriptor

var file_proto_conabit_englearn_exercise_exercise_service_proto_rawDesc = []byte{
	0x0a, 0x36, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2f,
	0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2f, 0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73,
	0x65, 0x2f, 0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x19, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69,
	0x74, 0x2e, 0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65, 0x72, 0x63,
	0x69, 0x73, 0x65, 0x1a, 0x32, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x63, 0x6f, 0x6e, 0x61, 0x62,
	0x69, 0x74, 0x2f, 0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2f, 0x65, 0x78, 0x65, 0x72,
	0x63, 0x69, 0x73, 0x65, 0x2f, 0x77, 0x6f, 0x72, 0x64, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x32, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x63,
	0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2f, 0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2f,
	0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x2f, 0x74, 0x61, 0x73, 0x6b, 0x5f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2b, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2f, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2f, 0x65, 0x6e, 0x67, 0x6c, 0x65,
	0x61, 0x72, 0x6e, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x73, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9a, 0x02, 0x0a, 0x08, 0x45, 0x78,
	0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x39, 0x0a, 0x0a, 0x73, 0x74, 0x61, 0x72, 0x74, 0x65,
	0x64, 0x5f, 0x61, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x73, 0x74, 0x61, 0x72, 0x74, 0x65, 0x64, 0x41,
	0x74, 0x12, 0x3b, 0x0a, 0x0b, 0x66, 0x69, 0x6e, 0x69, 0x73, 0x68, 0x65, 0x64, 0x5f, 0x61, 0x74,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x52, 0x0a, 0x66, 0x69, 0x6e, 0x69, 0x73, 0x68, 0x65, 0x64, 0x41, 0x74, 0x12, 0x42,
	0x0a, 0x0c, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x64, 0x5f, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x18, 0x04,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2e, 0x65,
	0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65,
	0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x0b, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x64, 0x54, 0x61, 0x73,
	0x6b, 0x73, 0x12, 0x42, 0x0a, 0x0c, 0x66, 0x61, 0x69, 0x6c, 0x65, 0x64, 0x5f, 0x74, 0x61, 0x73,
	0x6b, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x63, 0x6f, 0x6e, 0x61, 0x62,
	0x69, 0x74, 0x2e, 0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65, 0x72,
	0x63, 0x69, 0x73, 0x65, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x0b, 0x66, 0x61, 0x69, 0x6c, 0x65,
	0x64, 0x54, 0x61, 0x73, 0x6b, 0x73, 0x22, 0xa4, 0x02, 0x0a, 0x17, 0x53, 0x74, 0x61, 0x72, 0x74,
	0x4e, 0x65, 0x77, 0x45, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x3a, 0x0a, 0x07, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2e, 0x65, 0x6e,
	0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x07, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x5c,
	0x0a, 0x08, 0x67, 0x65, 0x6e, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x41, 0x2e, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2e, 0x65, 0x6e, 0x67, 0x6c, 0x65,
	0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x2e, 0x53, 0x74, 0x61,
	0x72, 0x74, 0x4e, 0x65, 0x77, 0x45, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x2e, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54,
	0x79, 0x70, 0x65, 0x52, 0x07, 0x67, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x12, 0x39, 0x0a, 0x05,
	0x77, 0x6f, 0x72, 0x64, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x63, 0x6f,
	0x6e, 0x61, 0x62, 0x69, 0x74, 0x2e, 0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65,
	0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x2e, 0x57, 0x6f, 0x72, 0x64, 0x50, 0x61, 0x69, 0x72,
	0x52, 0x05, 0x77, 0x6f, 0x72, 0x64, 0x73, 0x22, 0x34, 0x0a, 0x0e, 0x47, 0x65, 0x6e, 0x65, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x12, 0x07, 0x0a, 0x03, 0x4f, 0x4c, 0x44,
	0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x4d, 0x59, 0x5f, 0x43, 0x48, 0x4f, 0x49, 0x53, 0x45, 0x10,
	0x01, 0x12, 0x0a, 0x0a, 0x06, 0x52, 0x45, 0x50, 0x45, 0x41, 0x54, 0x10, 0x02, 0x22, 0x51, 0x0a,
	0x18, 0x53, 0x74, 0x61, 0x72, 0x74, 0x4e, 0x65, 0x77, 0x45, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x35, 0x0a, 0x05, 0x74, 0x61, 0x73,
	0x6b, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x63, 0x6f, 0x6e, 0x61, 0x62,
	0x69, 0x74, 0x2e, 0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65, 0x72,
	0x63, 0x69, 0x73, 0x65, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73,
	0x22, 0x8a, 0x01, 0x0a, 0x15, 0x46, 0x69, 0x6e, 0x69, 0x73, 0x68, 0x45, 0x78, 0x65, 0x72, 0x63,
	0x69, 0x73, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3a, 0x0a, 0x07, 0x73, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x63, 0x6f,
	0x6e, 0x61, 0x62, 0x69, 0x74, 0x2e, 0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x07, 0x73,
	0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x35, 0x0a, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2e,
	0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73,
	0x65, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x32, 0xfb, 0x01,
	0x0a, 0x0f, 0x45, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x12, 0x7d, 0x0a, 0x10, 0x53, 0x74, 0x61, 0x72, 0x74, 0x4e, 0x65, 0x77, 0x45, 0x78, 0x65,
	0x72, 0x63, 0x69, 0x73, 0x65, 0x12, 0x32, 0x2e, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2e,
	0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73,
	0x65, 0x2e, 0x53, 0x74, 0x61, 0x72, 0x74, 0x4e, 0x65, 0x77, 0x45, 0x78, 0x65, 0x72, 0x63, 0x69,
	0x73, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x33, 0x2e, 0x63, 0x6f, 0x6e, 0x61,
	0x62, 0x69, 0x74, 0x2e, 0x65, 0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65,
	0x72, 0x63, 0x69, 0x73, 0x65, 0x2e, 0x53, 0x74, 0x61, 0x72, 0x74, 0x4e, 0x65, 0x77, 0x45, 0x78,
	0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x12, 0x69, 0x0a, 0x0e, 0x46, 0x69, 0x6e, 0x69, 0x73, 0x68, 0x45, 0x78, 0x65, 0x72, 0x63, 0x69,
	0x73, 0x65, 0x12, 0x30, 0x2e, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2e, 0x65, 0x6e, 0x67,
	0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x2e, 0x46,
	0x69, 0x6e, 0x69, 0x73, 0x68, 0x45, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2e, 0x65,
	0x6e, 0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2e, 0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65,
	0x2e, 0x45, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x22, 0x00, 0x42, 0x42, 0x5a, 0x40, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x43, 0x6f, 0x6e, 0x61, 0x62, 0x69,
	0x74, 0x2d, 0x43, 0x6f, 0x72, 0x70, 0x2f, 0x45, 0x6e, 0x67, 0x4c, 0x65, 0x61, 0x72, 0x6e, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x63, 0x6f, 0x6e, 0x61, 0x62, 0x69, 0x74, 0x2f, 0x65, 0x6e,
	0x67, 0x6c, 0x65, 0x61, 0x72, 0x6e, 0x2f, 0x65, 0x78, 0x65, 0x72, 0x63, 0x69, 0x73, 0x65, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescOnce sync.Once
	file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescData = file_proto_conabit_englearn_exercise_exercise_service_proto_rawDesc
)

func file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescGZIP() []byte {
	file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescOnce.Do(func() {
		file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescData)
	})
	return file_proto_conabit_englearn_exercise_exercise_service_proto_rawDescData
}

var file_proto_conabit_englearn_exercise_exercise_service_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_proto_conabit_englearn_exercise_exercise_service_proto_goTypes = []interface{}{
	(StartNewExerciseRequest_GenerationType)(0), // 0: conabit.englearn.exercise.StartNewExerciseRequest.GenerationType
	(*Exercise)(nil),                 // 1: conabit.englearn.exercise.Exercise
	(*StartNewExerciseRequest)(nil),  // 2: conabit.englearn.exercise.StartNewExerciseRequest
	(*StartNewExerciseResponse)(nil), // 3: conabit.englearn.exercise.StartNewExerciseResponse
	(*FinishExerciseRequest)(nil),    // 4: conabit.englearn.exercise.FinishExerciseRequest
	(*timestamppb.Timestamp)(nil),    // 5: google.protobuf.Timestamp
	(*Task)(nil),                     // 6: conabit.englearn.exercise.Task
	(*common.Session)(nil),           // 7: conabit.englearn.common.Session
	(*WordPair)(nil),                 // 8: conabit.englearn.exercise.WordPair
}
var file_proto_conabit_englearn_exercise_exercise_service_proto_depIdxs = []int32{
	5,  // 0: conabit.englearn.exercise.Exercise.started_at:type_name -> google.protobuf.Timestamp
	5,  // 1: conabit.englearn.exercise.Exercise.finished_at:type_name -> google.protobuf.Timestamp
	6,  // 2: conabit.englearn.exercise.Exercise.solved_tasks:type_name -> conabit.englearn.exercise.Task
	6,  // 3: conabit.englearn.exercise.Exercise.failed_tasks:type_name -> conabit.englearn.exercise.Task
	7,  // 4: conabit.englearn.exercise.StartNewExerciseRequest.session:type_name -> conabit.englearn.common.Session
	0,  // 5: conabit.englearn.exercise.StartNewExerciseRequest.gen_type:type_name -> conabit.englearn.exercise.StartNewExerciseRequest.GenerationType
	8,  // 6: conabit.englearn.exercise.StartNewExerciseRequest.words:type_name -> conabit.englearn.exercise.WordPair
	6,  // 7: conabit.englearn.exercise.StartNewExerciseResponse.tasks:type_name -> conabit.englearn.exercise.Task
	7,  // 8: conabit.englearn.exercise.FinishExerciseRequest.session:type_name -> conabit.englearn.common.Session
	6,  // 9: conabit.englearn.exercise.FinishExerciseRequest.tasks:type_name -> conabit.englearn.exercise.Task
	2,  // 10: conabit.englearn.exercise.ExerciseService.StartNewExercise:input_type -> conabit.englearn.exercise.StartNewExerciseRequest
	4,  // 11: conabit.englearn.exercise.ExerciseService.FinishExercise:input_type -> conabit.englearn.exercise.FinishExerciseRequest
	3,  // 12: conabit.englearn.exercise.ExerciseService.StartNewExercise:output_type -> conabit.englearn.exercise.StartNewExerciseResponse
	1,  // 13: conabit.englearn.exercise.ExerciseService.FinishExercise:output_type -> conabit.englearn.exercise.Exercise
	12, // [12:14] is the sub-list for method output_type
	10, // [10:12] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_proto_conabit_englearn_exercise_exercise_service_proto_init() }
func file_proto_conabit_englearn_exercise_exercise_service_proto_init() {
	if File_proto_conabit_englearn_exercise_exercise_service_proto != nil {
		return
	}
	file_proto_conabit_englearn_exercise_word_service_proto_init()
	file_proto_conabit_englearn_exercise_task_service_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Exercise); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StartNewExerciseRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StartNewExerciseResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FinishExerciseRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_conabit_englearn_exercise_exercise_service_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_conabit_englearn_exercise_exercise_service_proto_goTypes,
		DependencyIndexes: file_proto_conabit_englearn_exercise_exercise_service_proto_depIdxs,
		EnumInfos:         file_proto_conabit_englearn_exercise_exercise_service_proto_enumTypes,
		MessageInfos:      file_proto_conabit_englearn_exercise_exercise_service_proto_msgTypes,
	}.Build()
	File_proto_conabit_englearn_exercise_exercise_service_proto = out.File
	file_proto_conabit_englearn_exercise_exercise_service_proto_rawDesc = nil
	file_proto_conabit_englearn_exercise_exercise_service_proto_goTypes = nil
	file_proto_conabit_englearn_exercise_exercise_service_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// ExerciseServiceClient is the client API for ExerciseService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ExerciseServiceClient interface {
	StartNewExercise(ctx context.Context, in *StartNewExerciseRequest, opts ...grpc.CallOption) (*StartNewExerciseResponse, error)
	FinishExercise(ctx context.Context, in *FinishExerciseRequest, opts ...grpc.CallOption) (*Exercise, error)
}

type exerciseServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewExerciseServiceClient(cc grpc.ClientConnInterface) ExerciseServiceClient {
	return &exerciseServiceClient{cc}
}

func (c *exerciseServiceClient) StartNewExercise(ctx context.Context, in *StartNewExerciseRequest, opts ...grpc.CallOption) (*StartNewExerciseResponse, error) {
	out := new(StartNewExerciseResponse)
	err := c.cc.Invoke(ctx, "/conabit.englearn.exercise.ExerciseService/StartNewExercise", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *exerciseServiceClient) FinishExercise(ctx context.Context, in *FinishExerciseRequest, opts ...grpc.CallOption) (*Exercise, error) {
	out := new(Exercise)
	err := c.cc.Invoke(ctx, "/conabit.englearn.exercise.ExerciseService/FinishExercise", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ExerciseServiceServer is the server API for ExerciseService service.
type ExerciseServiceServer interface {
	StartNewExercise(context.Context, *StartNewExerciseRequest) (*StartNewExerciseResponse, error)
	FinishExercise(context.Context, *FinishExerciseRequest) (*Exercise, error)
}

// UnimplementedExerciseServiceServer can be embedded to have forward compatible implementations.
type UnimplementedExerciseServiceServer struct {
}

func (*UnimplementedExerciseServiceServer) StartNewExercise(context.Context, *StartNewExerciseRequest) (*StartNewExerciseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method StartNewExercise not implemented")
}
func (*UnimplementedExerciseServiceServer) FinishExercise(context.Context, *FinishExerciseRequest) (*Exercise, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FinishExercise not implemented")
}

func RegisterExerciseServiceServer(s *grpc.Server, srv ExerciseServiceServer) {
	s.RegisterService(&_ExerciseService_serviceDesc, srv)
}

func _ExerciseService_StartNewExercise_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StartNewExerciseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExerciseServiceServer).StartNewExercise(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/conabit.englearn.exercise.ExerciseService/StartNewExercise",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExerciseServiceServer).StartNewExercise(ctx, req.(*StartNewExerciseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExerciseService_FinishExercise_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FinishExerciseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExerciseServiceServer).FinishExercise(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/conabit.englearn.exercise.ExerciseService/FinishExercise",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExerciseServiceServer).FinishExercise(ctx, req.(*FinishExerciseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ExerciseService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "conabit.englearn.exercise.ExerciseService",
	HandlerType: (*ExerciseServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "StartNewExercise",
			Handler:    _ExerciseService_StartNewExercise_Handler,
		},
		{
			MethodName: "FinishExercise",
			Handler:    _ExerciseService_FinishExercise_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/conabit/englearn/exercise/exercise_service.proto",
}
