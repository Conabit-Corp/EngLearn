// source: proto/conabit/englearn/auth/auth_service.proto
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

var proto_conabit_englearn_common_session_pb = require('../../../../proto/conabit/englearn/common/session_pb.js');
goog.object.extend(proto, proto_conabit_englearn_common_session_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.conabit.englearn.auth.AuthResponse', null, global);
goog.exportSymbol('proto.conabit.englearn.auth.LogoutRequest', null, global);
goog.exportSymbol('proto.conabit.englearn.auth.SignInRequest', null, global);
goog.exportSymbol('proto.conabit.englearn.auth.SignUpRequest', null, global);
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
proto.conabit.englearn.auth.SignInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.auth.SignInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.auth.SignInRequest.displayName = 'proto.conabit.englearn.auth.SignInRequest';
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
proto.conabit.englearn.auth.SignUpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.auth.SignUpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.auth.SignUpRequest.displayName = 'proto.conabit.englearn.auth.SignUpRequest';
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
proto.conabit.englearn.auth.LogoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.auth.LogoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.auth.LogoutRequest.displayName = 'proto.conabit.englearn.auth.LogoutRequest';
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
proto.conabit.englearn.auth.AuthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.auth.AuthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.auth.AuthResponse.displayName = 'proto.conabit.englearn.auth.AuthResponse';
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
proto.conabit.englearn.auth.SignInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.auth.SignInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.auth.SignInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.auth.SignInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    login: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.conabit.englearn.auth.SignInRequest}
 */
proto.conabit.englearn.auth.SignInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.auth.SignInRequest;
  return proto.conabit.englearn.auth.SignInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.auth.SignInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.auth.SignInRequest}
 */
proto.conabit.englearn.auth.SignInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogin(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.conabit.englearn.auth.SignInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.auth.SignInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.auth.SignInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.auth.SignInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string login = 1;
 * @return {string}
 */
proto.conabit.englearn.auth.SignInRequest.prototype.getLogin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.auth.SignInRequest} returns this
 */
proto.conabit.englearn.auth.SignInRequest.prototype.setLogin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.conabit.englearn.auth.SignInRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.auth.SignInRequest} returns this
 */
proto.conabit.englearn.auth.SignInRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.conabit.englearn.auth.SignUpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.auth.SignUpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.auth.SignUpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.auth.SignUpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    login: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rePassword: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.conabit.englearn.auth.SignUpRequest}
 */
proto.conabit.englearn.auth.SignUpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.auth.SignUpRequest;
  return proto.conabit.englearn.auth.SignUpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.auth.SignUpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.auth.SignUpRequest}
 */
proto.conabit.englearn.auth.SignUpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogin(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRePassword(value);
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
proto.conabit.englearn.auth.SignUpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.auth.SignUpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.auth.SignUpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.auth.SignUpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRePassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string login = 1;
 * @return {string}
 */
proto.conabit.englearn.auth.SignUpRequest.prototype.getLogin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.auth.SignUpRequest} returns this
 */
proto.conabit.englearn.auth.SignUpRequest.prototype.setLogin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.conabit.englearn.auth.SignUpRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.auth.SignUpRequest} returns this
 */
proto.conabit.englearn.auth.SignUpRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string re_password = 3;
 * @return {string}
 */
proto.conabit.englearn.auth.SignUpRequest.prototype.getRePassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.auth.SignUpRequest} returns this
 */
proto.conabit.englearn.auth.SignUpRequest.prototype.setRePassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.conabit.englearn.auth.LogoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.auth.LogoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.auth.LogoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.auth.LogoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: (f = msg.getSession()) && proto_conabit_englearn_common_session_pb.Session.toObject(includeInstance, f)
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
 * @return {!proto.conabit.englearn.auth.LogoutRequest}
 */
proto.conabit.englearn.auth.LogoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.auth.LogoutRequest;
  return proto.conabit.englearn.auth.LogoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.auth.LogoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.auth.LogoutRequest}
 */
proto.conabit.englearn.auth.LogoutRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.conabit.englearn.auth.LogoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.auth.LogoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.auth.LogoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.auth.LogoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_conabit_englearn_common_session_pb.Session.serializeBinaryToWriter
    );
  }
};


/**
 * optional conabit.englearn.common.Session session = 1;
 * @return {?proto.conabit.englearn.common.Session}
 */
proto.conabit.englearn.auth.LogoutRequest.prototype.getSession = function() {
  return /** @type{?proto.conabit.englearn.common.Session} */ (
    jspb.Message.getWrapperField(this, proto_conabit_englearn_common_session_pb.Session, 1));
};


/**
 * @param {?proto.conabit.englearn.common.Session|undefined} value
 * @return {!proto.conabit.englearn.auth.LogoutRequest} returns this
*/
proto.conabit.englearn.auth.LogoutRequest.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.auth.LogoutRequest} returns this
 */
proto.conabit.englearn.auth.LogoutRequest.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.auth.LogoutRequest.prototype.hasSession = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.conabit.englearn.auth.AuthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.auth.AuthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.auth.AuthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.auth.AuthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: (f = msg.getSession()) && proto_conabit_englearn_common_session_pb.Session.toObject(includeInstance, f)
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
 * @return {!proto.conabit.englearn.auth.AuthResponse}
 */
proto.conabit.englearn.auth.AuthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.auth.AuthResponse;
  return proto.conabit.englearn.auth.AuthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.auth.AuthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.auth.AuthResponse}
 */
proto.conabit.englearn.auth.AuthResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.conabit.englearn.auth.AuthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.auth.AuthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.auth.AuthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.auth.AuthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_conabit_englearn_common_session_pb.Session.serializeBinaryToWriter
    );
  }
};


/**
 * optional conabit.englearn.common.Session session = 1;
 * @return {?proto.conabit.englearn.common.Session}
 */
proto.conabit.englearn.auth.AuthResponse.prototype.getSession = function() {
  return /** @type{?proto.conabit.englearn.common.Session} */ (
    jspb.Message.getWrapperField(this, proto_conabit_englearn_common_session_pb.Session, 1));
};


/**
 * @param {?proto.conabit.englearn.common.Session|undefined} value
 * @return {!proto.conabit.englearn.auth.AuthResponse} returns this
*/
proto.conabit.englearn.auth.AuthResponse.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.auth.AuthResponse} returns this
 */
proto.conabit.englearn.auth.AuthResponse.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.auth.AuthResponse.prototype.hasSession = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.conabit.englearn.auth);
