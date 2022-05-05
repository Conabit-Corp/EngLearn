// source: proto/conabit/englearn/exercise/task_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_conabit_englearn_exercise_word_service_pb = require('../../../../proto/conabit/englearn/exercise/word_service_pb.js');
goog.object.extend(proto, proto_conabit_englearn_exercise_word_service_pb);
var proto_conabit_englearn_common_session_pb = require('../../../../proto/conabit/englearn/common/session_pb.js');
goog.object.extend(proto, proto_conabit_englearn_common_session_pb);
goog.exportSymbol('proto.conabit.englearn.exercise.SolveTaskRequest', null, global);
goog.exportSymbol('proto.conabit.englearn.exercise.SolveTaskResponse', null, global);
goog.exportSymbol('proto.conabit.englearn.exercise.Task', null, global);
goog.exportSymbol('proto.conabit.englearn.exercise.Task.TaskType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.conabit.englearn.exercise.SolveTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.exercise.SolveTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.exercise.SolveTaskRequest.displayName = 'proto.conabit.englearn.exercise.SolveTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.conabit.englearn.exercise.SolveTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.exercise.SolveTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.exercise.SolveTaskResponse.displayName = 'proto.conabit.englearn.exercise.SolveTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.conabit.englearn.exercise.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.exercise.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.exercise.Task.displayName = 'proto.conabit.englearn.exercise.Task';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.exercise.SolveTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.exercise.SolveTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.exercise.SolveTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: (f = msg.getSession()) && proto_conabit_englearn_common_session_pb.Session.toObject(includeInstance, f),
    task: (f = msg.getTask()) && proto.conabit.englearn.exercise.Task.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.conabit.englearn.exercise.SolveTaskRequest}
 */
proto.conabit.englearn.exercise.SolveTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.exercise.SolveTaskRequest;
  return proto.conabit.englearn.exercise.SolveTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.exercise.SolveTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.exercise.SolveTaskRequest}
 */
proto.conabit.englearn.exercise.SolveTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_conabit_englearn_common_session_pb.Session;
      reader.readMessage(value,proto_conabit_englearn_common_session_pb.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 2:
      var value = new proto.conabit.englearn.exercise.Task;
      reader.readMessage(value,proto.conabit.englearn.exercise.Task.deserializeBinaryFromReader);
      msg.setTask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.exercise.SolveTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.exercise.SolveTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.exercise.SolveTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_conabit_englearn_common_session_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.conabit.englearn.exercise.Task.serializeBinaryToWriter
    );
  }
};


/**
 * optional conabit.englearn.common.Session session = 1;
 * @return {?proto.conabit.englearn.common.Session}
 */
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.getSession = function() {
  return /** @type{?proto.conabit.englearn.common.Session} */ (
    jspb.Message.getWrapperField(this, proto_conabit_englearn_common_session_pb.Session, 1));
};


/**
 * @param {?proto.conabit.englearn.common.Session|undefined} value
 * @return {!proto.conabit.englearn.exercise.SolveTaskRequest} returns this
*/
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.exercise.SolveTaskRequest} returns this
 */
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.hasSession = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Task task = 2;
 * @return {?proto.conabit.englearn.exercise.Task}
 */
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.getTask = function() {
  return /** @type{?proto.conabit.englearn.exercise.Task} */ (
    jspb.Message.getWrapperField(this, proto.conabit.englearn.exercise.Task, 2));
};


/**
 * @param {?proto.conabit.englearn.exercise.Task|undefined} value
 * @return {!proto.conabit.englearn.exercise.SolveTaskRequest} returns this
*/
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.setTask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.exercise.SolveTaskRequest} returns this
 */
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.exercise.SolveTaskRequest.prototype.hasTask = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.conabit.englearn.exercise.SolveTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.exercise.SolveTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.exercise.SolveTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.exercise.SolveTaskResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    solved: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.conabit.englearn.exercise.SolveTaskResponse}
 */
proto.conabit.englearn.exercise.SolveTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.exercise.SolveTaskResponse;
  return proto.conabit.englearn.exercise.SolveTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.exercise.SolveTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.exercise.SolveTaskResponse}
 */
proto.conabit.englearn.exercise.SolveTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSolved(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.conabit.englearn.exercise.SolveTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.exercise.SolveTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.exercise.SolveTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.exercise.SolveTaskResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSolved();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool solved = 1;
 * @return {boolean}
 */
proto.conabit.englearn.exercise.SolveTaskResponse.prototype.getSolved = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.conabit.englearn.exercise.SolveTaskResponse} returns this
 */
proto.conabit.englearn.exercise.SolveTaskResponse.prototype.setSolved = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.conabit.englearn.exercise.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.exercise.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.exercise.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.exercise.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    answer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    word: (f = msg.getWord()) && proto_conabit_englearn_exercise_word_service_pb.Word.toObject(includeInstance, f),
    pairId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    taskType: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.conabit.englearn.exercise.Task}
 */
proto.conabit.englearn.exercise.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.exercise.Task;
  return proto.conabit.englearn.exercise.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.exercise.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.exercise.Task}
 */
proto.conabit.englearn.exercise.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswer(value);
      break;
    case 3:
      var value = new proto_conabit_englearn_exercise_word_service_pb.Word;
      reader.readMessage(value,proto_conabit_englearn_exercise_word_service_pb.Word.deserializeBinaryFromReader);
      msg.setWord(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 5:
      var value = /** @type {!proto.conabit.englearn.exercise.Task.TaskType} */ (reader.readEnum());
      msg.setTaskType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.conabit.englearn.exercise.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.exercise.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.exercise.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.exercise.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnswer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWord();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_conabit_englearn_exercise_word_service_pb.Word.serializeBinaryToWriter
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTaskType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.conabit.englearn.exercise.Task.TaskType = {
  JUST_INPUT: 0,
  ONE_OF_N: 1,
  N_OF_N: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.conabit.englearn.exercise.Task.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.exercise.Task} returns this
 */
proto.conabit.englearn.exercise.Task.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string answer = 2;
 * @return {string}
 */
proto.conabit.englearn.exercise.Task.prototype.getAnswer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.exercise.Task} returns this
 */
proto.conabit.englearn.exercise.Task.prototype.setAnswer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Word word = 3;
 * @return {?proto.conabit.englearn.exercise.Word}
 */
proto.conabit.englearn.exercise.Task.prototype.getWord = function() {
  return /** @type{?proto.conabit.englearn.exercise.Word} */ (
    jspb.Message.getWrapperField(this, proto_conabit_englearn_exercise_word_service_pb.Word, 3));
};


/**
 * @param {?proto.conabit.englearn.exercise.Word|undefined} value
 * @return {!proto.conabit.englearn.exercise.Task} returns this
*/
proto.conabit.englearn.exercise.Task.prototype.setWord = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.exercise.Task} returns this
 */
proto.conabit.englearn.exercise.Task.prototype.clearWord = function() {
  return this.setWord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.exercise.Task.prototype.hasWord = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string pair_id = 4;
 * @return {string}
 */
proto.conabit.englearn.exercise.Task.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.exercise.Task} returns this
 */
proto.conabit.englearn.exercise.Task.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TaskType task_type = 5;
 * @return {!proto.conabit.englearn.exercise.Task.TaskType}
 */
proto.conabit.englearn.exercise.Task.prototype.getTaskType = function() {
  return /** @type {!proto.conabit.englearn.exercise.Task.TaskType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.conabit.englearn.exercise.Task.TaskType} value
 * @return {!proto.conabit.englearn.exercise.Task} returns this
 */
proto.conabit.englearn.exercise.Task.prototype.setTaskType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


goog.object.extend(exports, proto.conabit.englearn.exercise);