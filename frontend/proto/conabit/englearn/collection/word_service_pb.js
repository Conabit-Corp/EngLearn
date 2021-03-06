// source: proto/conabit/englearn/collection/word_service.proto
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
goog.exportSymbol('proto.conabit.englearn.collection.CloneWordPairRequest', null, global);
goog.exportSymbol('proto.conabit.englearn.collection.LogOutRequest', null, global);
goog.exportSymbol('proto.conabit.englearn.collection.RegisterWordPairRequest', null, global);
goog.exportSymbol('proto.conabit.englearn.collection.Word', null, global);
goog.exportSymbol('proto.conabit.englearn.collection.WordPair', null, global);
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
proto.conabit.englearn.collection.WordPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.collection.WordPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.collection.WordPair.displayName = 'proto.conabit.englearn.collection.WordPair';
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
proto.conabit.englearn.collection.Word = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.collection.Word, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.collection.Word.displayName = 'proto.conabit.englearn.collection.Word';
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
proto.conabit.englearn.collection.LogOutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.collection.LogOutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.collection.LogOutRequest.displayName = 'proto.conabit.englearn.collection.LogOutRequest';
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
proto.conabit.englearn.collection.RegisterWordPairRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.collection.RegisterWordPairRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.collection.RegisterWordPairRequest.displayName = 'proto.conabit.englearn.collection.RegisterWordPairRequest';
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
proto.conabit.englearn.collection.CloneWordPairRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.collection.CloneWordPairRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.collection.CloneWordPairRequest.displayName = 'proto.conabit.englearn.collection.CloneWordPairRequest';
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
proto.conabit.englearn.collection.WordPair.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.collection.WordPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.collection.WordPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.WordPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    word1: (f = msg.getWord1()) && proto.conabit.englearn.collection.Word.toObject(includeInstance, f),
    word2: (f = msg.getWord2()) && proto.conabit.englearn.collection.Word.toObject(includeInstance, f)
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
 * @return {!proto.conabit.englearn.collection.WordPair}
 */
proto.conabit.englearn.collection.WordPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.collection.WordPair;
  return proto.conabit.englearn.collection.WordPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.collection.WordPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.collection.WordPair}
 */
proto.conabit.englearn.collection.WordPair.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.conabit.englearn.collection.Word;
      reader.readMessage(value,proto.conabit.englearn.collection.Word.deserializeBinaryFromReader);
      msg.setWord1(value);
      break;
    case 3:
      var value = new proto.conabit.englearn.collection.Word;
      reader.readMessage(value,proto.conabit.englearn.collection.Word.deserializeBinaryFromReader);
      msg.setWord2(value);
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
proto.conabit.englearn.collection.WordPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.collection.WordPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.collection.WordPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.WordPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWord1();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.conabit.englearn.collection.Word.serializeBinaryToWriter
    );
  }
  f = message.getWord2();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.conabit.englearn.collection.Word.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.conabit.englearn.collection.WordPair.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.WordPair} returns this
 */
proto.conabit.englearn.collection.WordPair.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Word word1 = 2;
 * @return {?proto.conabit.englearn.collection.Word}
 */
proto.conabit.englearn.collection.WordPair.prototype.getWord1 = function() {
  return /** @type{?proto.conabit.englearn.collection.Word} */ (
    jspb.Message.getWrapperField(this, proto.conabit.englearn.collection.Word, 2));
};


/**
 * @param {?proto.conabit.englearn.collection.Word|undefined} value
 * @return {!proto.conabit.englearn.collection.WordPair} returns this
*/
proto.conabit.englearn.collection.WordPair.prototype.setWord1 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.collection.WordPair} returns this
 */
proto.conabit.englearn.collection.WordPair.prototype.clearWord1 = function() {
  return this.setWord1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.collection.WordPair.prototype.hasWord1 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Word word2 = 3;
 * @return {?proto.conabit.englearn.collection.Word}
 */
proto.conabit.englearn.collection.WordPair.prototype.getWord2 = function() {
  return /** @type{?proto.conabit.englearn.collection.Word} */ (
    jspb.Message.getWrapperField(this, proto.conabit.englearn.collection.Word, 3));
};


/**
 * @param {?proto.conabit.englearn.collection.Word|undefined} value
 * @return {!proto.conabit.englearn.collection.WordPair} returns this
*/
proto.conabit.englearn.collection.WordPair.prototype.setWord2 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.collection.WordPair} returns this
 */
proto.conabit.englearn.collection.WordPair.prototype.clearWord2 = function() {
  return this.setWord2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.collection.WordPair.prototype.hasWord2 = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.conabit.englearn.collection.Word.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.collection.Word.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.collection.Word} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.Word.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    wordValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    countryCode: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.conabit.englearn.collection.Word}
 */
proto.conabit.englearn.collection.Word.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.collection.Word;
  return proto.conabit.englearn.collection.Word.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.collection.Word} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.collection.Word}
 */
proto.conabit.englearn.collection.Word.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setWordValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
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
proto.conabit.englearn.collection.Word.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.collection.Word.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.collection.Word} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.Word.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWordValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.conabit.englearn.collection.Word.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.Word} returns this
 */
proto.conabit.englearn.collection.Word.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string word_value = 2;
 * @return {string}
 */
proto.conabit.englearn.collection.Word.prototype.getWordValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.Word} returns this
 */
proto.conabit.englearn.collection.Word.prototype.setWordValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string country_code = 3;
 * @return {string}
 */
proto.conabit.englearn.collection.Word.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.Word} returns this
 */
proto.conabit.englearn.collection.Word.prototype.setCountryCode = function(value) {
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
proto.conabit.englearn.collection.LogOutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.collection.LogOutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.collection.LogOutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.LogOutRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.conabit.englearn.collection.LogOutRequest}
 */
proto.conabit.englearn.collection.LogOutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.collection.LogOutRequest;
  return proto.conabit.englearn.collection.LogOutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.collection.LogOutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.collection.LogOutRequest}
 */
proto.conabit.englearn.collection.LogOutRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.conabit.englearn.collection.LogOutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.collection.LogOutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.collection.LogOutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.LogOutRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.conabit.englearn.collection.LogOutRequest.prototype.getSession = function() {
  return /** @type{?proto.conabit.englearn.common.Session} */ (
    jspb.Message.getWrapperField(this, proto_conabit_englearn_common_session_pb.Session, 1));
};


/**
 * @param {?proto.conabit.englearn.common.Session|undefined} value
 * @return {!proto.conabit.englearn.collection.LogOutRequest} returns this
*/
proto.conabit.englearn.collection.LogOutRequest.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.collection.LogOutRequest} returns this
 */
proto.conabit.englearn.collection.LogOutRequest.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.collection.LogOutRequest.prototype.hasSession = function() {
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
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.collection.RegisterWordPairRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.collection.RegisterWordPairRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: (f = msg.getSession()) && proto_conabit_englearn_common_session_pb.Session.toObject(includeInstance, f),
    wordPair: (f = msg.getWordPair()) && proto.conabit.englearn.collection.WordPair.toObject(includeInstance, f)
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
 * @return {!proto.conabit.englearn.collection.RegisterWordPairRequest}
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.collection.RegisterWordPairRequest;
  return proto.conabit.englearn.collection.RegisterWordPairRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.collection.RegisterWordPairRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.collection.RegisterWordPairRequest}
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.conabit.englearn.collection.WordPair;
      reader.readMessage(value,proto.conabit.englearn.collection.WordPair.deserializeBinaryFromReader);
      msg.setWordPair(value);
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
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.collection.RegisterWordPairRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.collection.RegisterWordPairRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_conabit_englearn_common_session_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getWordPair();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.conabit.englearn.collection.WordPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional conabit.englearn.common.Session session = 1;
 * @return {?proto.conabit.englearn.common.Session}
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.getSession = function() {
  return /** @type{?proto.conabit.englearn.common.Session} */ (
    jspb.Message.getWrapperField(this, proto_conabit_englearn_common_session_pb.Session, 1));
};


/**
 * @param {?proto.conabit.englearn.common.Session|undefined} value
 * @return {!proto.conabit.englearn.collection.RegisterWordPairRequest} returns this
*/
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.collection.RegisterWordPairRequest} returns this
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.hasSession = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WordPair word_pair = 2;
 * @return {?proto.conabit.englearn.collection.WordPair}
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.getWordPair = function() {
  return /** @type{?proto.conabit.englearn.collection.WordPair} */ (
    jspb.Message.getWrapperField(this, proto.conabit.englearn.collection.WordPair, 2));
};


/**
 * @param {?proto.conabit.englearn.collection.WordPair|undefined} value
 * @return {!proto.conabit.englearn.collection.RegisterWordPairRequest} returns this
*/
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.setWordPair = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.collection.RegisterWordPairRequest} returns this
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.clearWordPair = function() {
  return this.setWordPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.collection.RegisterWordPairRequest.prototype.hasWordPair = function() {
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
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.collection.CloneWordPairRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.collection.CloneWordPairRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.CloneWordPairRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sesion: (f = msg.getSesion()) && proto_conabit_englearn_common_session_pb.Session.toObject(includeInstance, f),
    wordPair: (f = msg.getWordPair()) && proto.conabit.englearn.collection.WordPair.toObject(includeInstance, f)
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
 * @return {!proto.conabit.englearn.collection.CloneWordPairRequest}
 */
proto.conabit.englearn.collection.CloneWordPairRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.collection.CloneWordPairRequest;
  return proto.conabit.englearn.collection.CloneWordPairRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.collection.CloneWordPairRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.collection.CloneWordPairRequest}
 */
proto.conabit.englearn.collection.CloneWordPairRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_conabit_englearn_common_session_pb.Session;
      reader.readMessage(value,proto_conabit_englearn_common_session_pb.Session.deserializeBinaryFromReader);
      msg.setSesion(value);
      break;
    case 2:
      var value = new proto.conabit.englearn.collection.WordPair;
      reader.readMessage(value,proto.conabit.englearn.collection.WordPair.deserializeBinaryFromReader);
      msg.setWordPair(value);
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
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.collection.CloneWordPairRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.collection.CloneWordPairRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.CloneWordPairRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSesion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_conabit_englearn_common_session_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getWordPair();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.conabit.englearn.collection.WordPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional conabit.englearn.common.Session sesion = 1;
 * @return {?proto.conabit.englearn.common.Session}
 */
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.getSesion = function() {
  return /** @type{?proto.conabit.englearn.common.Session} */ (
    jspb.Message.getWrapperField(this, proto_conabit_englearn_common_session_pb.Session, 1));
};


/**
 * @param {?proto.conabit.englearn.common.Session|undefined} value
 * @return {!proto.conabit.englearn.collection.CloneWordPairRequest} returns this
*/
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.setSesion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.collection.CloneWordPairRequest} returns this
 */
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.clearSesion = function() {
  return this.setSesion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.hasSesion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WordPair word_pair = 2;
 * @return {?proto.conabit.englearn.collection.WordPair}
 */
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.getWordPair = function() {
  return /** @type{?proto.conabit.englearn.collection.WordPair} */ (
    jspb.Message.getWrapperField(this, proto.conabit.englearn.collection.WordPair, 2));
};


/**
 * @param {?proto.conabit.englearn.collection.WordPair|undefined} value
 * @return {!proto.conabit.englearn.collection.CloneWordPairRequest} returns this
*/
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.setWordPair = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.conabit.englearn.collection.CloneWordPairRequest} returns this
 */
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.clearWordPair = function() {
  return this.setWordPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.conabit.englearn.collection.CloneWordPairRequest.prototype.hasWordPair = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.conabit.englearn.collection);
