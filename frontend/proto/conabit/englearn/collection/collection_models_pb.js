// source: proto/conabit/englearn/collection/collection_models.proto
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

goog.exportSymbol('proto.conabit.englearn.collection.CollectionsOverview', null, global);
goog.exportSymbol('proto.conabit.englearn.collection.CollectionsOverview.Overview', null, global);
goog.exportSymbol('proto.conabit.englearn.collection.Word', null, global);
goog.exportSymbol('proto.conabit.englearn.collection.WordCollection', null, global);
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
proto.conabit.englearn.collection.WordCollection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.conabit.englearn.collection.WordCollection.repeatedFields_, null);
};
goog.inherits(proto.conabit.englearn.collection.WordCollection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.collection.WordCollection.displayName = 'proto.conabit.englearn.collection.WordCollection';
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
proto.conabit.englearn.collection.CollectionsOverview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.conabit.englearn.collection.CollectionsOverview.repeatedFields_, null);
};
goog.inherits(proto.conabit.englearn.collection.CollectionsOverview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.collection.CollectionsOverview.displayName = 'proto.conabit.englearn.collection.CollectionsOverview';
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
proto.conabit.englearn.collection.CollectionsOverview.Overview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.conabit.englearn.collection.CollectionsOverview.Overview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.conabit.englearn.collection.CollectionsOverview.Overview.displayName = 'proto.conabit.englearn.collection.CollectionsOverview.Overview';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.conabit.englearn.collection.WordCollection.repeatedFields_ = [4];



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
proto.conabit.englearn.collection.WordCollection.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.collection.WordCollection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.collection.WordCollection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.WordCollection.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    wordsList: jspb.Message.toObjectList(msg.getWordsList(),
    proto.conabit.englearn.collection.WordPair.toObject, includeInstance)
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
 * @return {!proto.conabit.englearn.collection.WordCollection}
 */
proto.conabit.englearn.collection.WordCollection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.collection.WordCollection;
  return proto.conabit.englearn.collection.WordCollection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.collection.WordCollection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.collection.WordCollection}
 */
proto.conabit.englearn.collection.WordCollection.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.conabit.englearn.collection.WordPair;
      reader.readMessage(value,proto.conabit.englearn.collection.WordPair.deserializeBinaryFromReader);
      msg.addWords(value);
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
proto.conabit.englearn.collection.WordCollection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.collection.WordCollection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.collection.WordCollection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.WordCollection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.conabit.englearn.collection.WordPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.conabit.englearn.collection.WordCollection.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.WordCollection} returns this
 */
proto.conabit.englearn.collection.WordCollection.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.conabit.englearn.collection.WordCollection.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.WordCollection} returns this
 */
proto.conabit.englearn.collection.WordCollection.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.conabit.englearn.collection.WordCollection.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.WordCollection} returns this
 */
proto.conabit.englearn.collection.WordCollection.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated WordPair words = 4;
 * @return {!Array<!proto.conabit.englearn.collection.WordPair>}
 */
proto.conabit.englearn.collection.WordCollection.prototype.getWordsList = function() {
  return /** @type{!Array<!proto.conabit.englearn.collection.WordPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.conabit.englearn.collection.WordPair, 4));
};


/**
 * @param {!Array<!proto.conabit.englearn.collection.WordPair>} value
 * @return {!proto.conabit.englearn.collection.WordCollection} returns this
*/
proto.conabit.englearn.collection.WordCollection.prototype.setWordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.conabit.englearn.collection.WordPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.conabit.englearn.collection.WordPair}
 */
proto.conabit.englearn.collection.WordCollection.prototype.addWords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.conabit.englearn.collection.WordPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.conabit.englearn.collection.WordCollection} returns this
 */
proto.conabit.englearn.collection.WordCollection.prototype.clearWordsList = function() {
  return this.setWordsList([]);
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
 * optional Word word_1 = 2;
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
 * optional Word word_2 = 3;
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
    countryCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string country_code = 2;
 * @return {string}
 */
proto.conabit.englearn.collection.Word.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.Word} returns this
 */
proto.conabit.englearn.collection.Word.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.conabit.englearn.collection.Word.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.Word} returns this
 */
proto.conabit.englearn.collection.Word.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.conabit.englearn.collection.CollectionsOverview.repeatedFields_ = [1];



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
proto.conabit.englearn.collection.CollectionsOverview.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.collection.CollectionsOverview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.collection.CollectionsOverview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.CollectionsOverview.toObject = function(includeInstance, msg) {
  var f, obj = {
    collectionsList: jspb.Message.toObjectList(msg.getCollectionsList(),
    proto.conabit.englearn.collection.CollectionsOverview.Overview.toObject, includeInstance)
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
 * @return {!proto.conabit.englearn.collection.CollectionsOverview}
 */
proto.conabit.englearn.collection.CollectionsOverview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.collection.CollectionsOverview;
  return proto.conabit.englearn.collection.CollectionsOverview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.collection.CollectionsOverview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.collection.CollectionsOverview}
 */
proto.conabit.englearn.collection.CollectionsOverview.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.conabit.englearn.collection.CollectionsOverview.Overview;
      reader.readMessage(value,proto.conabit.englearn.collection.CollectionsOverview.Overview.deserializeBinaryFromReader);
      msg.addCollections(value);
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
proto.conabit.englearn.collection.CollectionsOverview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.collection.CollectionsOverview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.collection.CollectionsOverview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.CollectionsOverview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.conabit.englearn.collection.CollectionsOverview.Overview.serializeBinaryToWriter
    );
  }
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
proto.conabit.englearn.collection.CollectionsOverview.Overview.prototype.toObject = function(opt_includeInstance) {
  return proto.conabit.englearn.collection.CollectionsOverview.Overview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.conabit.englearn.collection.CollectionsOverview.Overview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.CollectionsOverview.Overview.toObject = function(includeInstance, msg) {
  var f, obj = {
    collectionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.conabit.englearn.collection.CollectionsOverview.Overview}
 */
proto.conabit.englearn.collection.CollectionsOverview.Overview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.conabit.englearn.collection.CollectionsOverview.Overview;
  return proto.conabit.englearn.collection.CollectionsOverview.Overview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.conabit.englearn.collection.CollectionsOverview.Overview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.conabit.englearn.collection.CollectionsOverview.Overview}
 */
proto.conabit.englearn.collection.CollectionsOverview.Overview.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
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
proto.conabit.englearn.collection.CollectionsOverview.Overview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.conabit.englearn.collection.CollectionsOverview.Overview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.conabit.englearn.collection.CollectionsOverview.Overview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.conabit.englearn.collection.CollectionsOverview.Overview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollectionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string collection_id = 1;
 * @return {string}
 */
proto.conabit.englearn.collection.CollectionsOverview.Overview.prototype.getCollectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.CollectionsOverview.Overview} returns this
 */
proto.conabit.englearn.collection.CollectionsOverview.Overview.prototype.setCollectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string collection_name = 2;
 * @return {string}
 */
proto.conabit.englearn.collection.CollectionsOverview.Overview.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.conabit.englearn.collection.CollectionsOverview.Overview} returns this
 */
proto.conabit.englearn.collection.CollectionsOverview.Overview.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Overview collections = 1;
 * @return {!Array<!proto.conabit.englearn.collection.CollectionsOverview.Overview>}
 */
proto.conabit.englearn.collection.CollectionsOverview.prototype.getCollectionsList = function() {
  return /** @type{!Array<!proto.conabit.englearn.collection.CollectionsOverview.Overview>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.conabit.englearn.collection.CollectionsOverview.Overview, 1));
};


/**
 * @param {!Array<!proto.conabit.englearn.collection.CollectionsOverview.Overview>} value
 * @return {!proto.conabit.englearn.collection.CollectionsOverview} returns this
*/
proto.conabit.englearn.collection.CollectionsOverview.prototype.setCollectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.conabit.englearn.collection.CollectionsOverview.Overview=} opt_value
 * @param {number=} opt_index
 * @return {!proto.conabit.englearn.collection.CollectionsOverview.Overview}
 */
proto.conabit.englearn.collection.CollectionsOverview.prototype.addCollections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.conabit.englearn.collection.CollectionsOverview.Overview, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.conabit.englearn.collection.CollectionsOverview} returns this
 */
proto.conabit.englearn.collection.CollectionsOverview.prototype.clearCollectionsList = function() {
  return this.setCollectionsList([]);
};


goog.object.extend(exports, proto.conabit.englearn.collection);
