// source: network.proto
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
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.pactus.GetNetworkInfoRequest', null, global);
goog.exportSymbol('proto.pactus.GetNetworkInfoResponse', null, global);
goog.exportSymbol('proto.pactus.GetPeerInfoRequest', null, global);
goog.exportSymbol('proto.pactus.GetPeerInfoResponse', null, global);
goog.exportSymbol('proto.pactus.PeerInfo', null, global);
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
proto.pactus.GetNetworkInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pactus.GetNetworkInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pactus.GetNetworkInfoRequest.displayName = 'proto.pactus.GetNetworkInfoRequest';
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
proto.pactus.GetNetworkInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pactus.GetNetworkInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.pactus.GetNetworkInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pactus.GetNetworkInfoResponse.displayName = 'proto.pactus.GetNetworkInfoResponse';
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
proto.pactus.GetPeerInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pactus.GetPeerInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pactus.GetPeerInfoRequest.displayName = 'proto.pactus.GetPeerInfoRequest';
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
proto.pactus.GetPeerInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pactus.GetPeerInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pactus.GetPeerInfoResponse.displayName = 'proto.pactus.GetPeerInfoResponse';
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
proto.pactus.PeerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pactus.PeerInfo.repeatedFields_, null);
};
goog.inherits(proto.pactus.PeerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pactus.PeerInfo.displayName = 'proto.pactus.PeerInfo';
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
proto.pactus.GetNetworkInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pactus.GetNetworkInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pactus.GetNetworkInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.GetNetworkInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.pactus.GetNetworkInfoRequest}
 */
proto.pactus.GetNetworkInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pactus.GetNetworkInfoRequest;
  return proto.pactus.GetNetworkInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pactus.GetNetworkInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pactus.GetNetworkInfoRequest}
 */
proto.pactus.GetNetworkInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.pactus.GetNetworkInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pactus.GetNetworkInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pactus.GetNetworkInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.GetNetworkInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pactus.GetNetworkInfoResponse.repeatedFields_ = [2];



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
proto.pactus.GetNetworkInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pactus.GetNetworkInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pactus.GetNetworkInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.GetNetworkInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    selfId: msg.getSelfId_asB64(),
    peersList: jspb.Message.toObjectList(msg.getPeersList(),
    proto.pactus.PeerInfo.toObject, includeInstance)
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
 * @return {!proto.pactus.GetNetworkInfoResponse}
 */
proto.pactus.GetNetworkInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pactus.GetNetworkInfoResponse;
  return proto.pactus.GetNetworkInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pactus.GetNetworkInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pactus.GetNetworkInfoResponse}
 */
proto.pactus.GetNetworkInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSelfId(value);
      break;
    case 2:
      var value = new proto.pactus.PeerInfo;
      reader.readMessage(value,proto.pactus.PeerInfo.deserializeBinaryFromReader);
      msg.addPeers(value);
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
proto.pactus.GetNetworkInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pactus.GetNetworkInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pactus.GetNetworkInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.GetNetworkInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelfId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPeersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pactus.PeerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes self_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.pactus.GetNetworkInfoResponse.prototype.getSelfId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes self_id = 1;
 * This is a type-conversion wrapper around `getSelfId()`
 * @return {string}
 */
proto.pactus.GetNetworkInfoResponse.prototype.getSelfId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSelfId()));
};


/**
 * optional bytes self_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSelfId()`
 * @return {!Uint8Array}
 */
proto.pactus.GetNetworkInfoResponse.prototype.getSelfId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSelfId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pactus.GetNetworkInfoResponse} returns this
 */
proto.pactus.GetNetworkInfoResponse.prototype.setSelfId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated PeerInfo peers = 2;
 * @return {!Array<!proto.pactus.PeerInfo>}
 */
proto.pactus.GetNetworkInfoResponse.prototype.getPeersList = function() {
  return /** @type{!Array<!proto.pactus.PeerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pactus.PeerInfo, 2));
};


/**
 * @param {!Array<!proto.pactus.PeerInfo>} value
 * @return {!proto.pactus.GetNetworkInfoResponse} returns this
*/
proto.pactus.GetNetworkInfoResponse.prototype.setPeersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pactus.PeerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pactus.PeerInfo}
 */
proto.pactus.GetNetworkInfoResponse.prototype.addPeers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pactus.PeerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pactus.GetNetworkInfoResponse} returns this
 */
proto.pactus.GetNetworkInfoResponse.prototype.clearPeersList = function() {
  return this.setPeersList([]);
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
proto.pactus.GetPeerInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pactus.GetPeerInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pactus.GetPeerInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.GetPeerInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.pactus.GetPeerInfoRequest}
 */
proto.pactus.GetPeerInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pactus.GetPeerInfoRequest;
  return proto.pactus.GetPeerInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pactus.GetPeerInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pactus.GetPeerInfoRequest}
 */
proto.pactus.GetPeerInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.pactus.GetPeerInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pactus.GetPeerInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pactus.GetPeerInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.GetPeerInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.pactus.GetPeerInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pactus.GetPeerInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pactus.GetPeerInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.GetPeerInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.pactus.PeerInfo.toObject(includeInstance, f)
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
 * @return {!proto.pactus.GetPeerInfoResponse}
 */
proto.pactus.GetPeerInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pactus.GetPeerInfoResponse;
  return proto.pactus.GetPeerInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pactus.GetPeerInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pactus.GetPeerInfoResponse}
 */
proto.pactus.GetPeerInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pactus.PeerInfo;
      reader.readMessage(value,proto.pactus.PeerInfo.deserializeBinaryFromReader);
      msg.setPeer(value);
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
proto.pactus.GetPeerInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pactus.GetPeerInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pactus.GetPeerInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.GetPeerInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pactus.PeerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PeerInfo peer = 1;
 * @return {?proto.pactus.PeerInfo}
 */
proto.pactus.GetPeerInfoResponse.prototype.getPeer = function() {
  return /** @type{?proto.pactus.PeerInfo} */ (
    jspb.Message.getWrapperField(this, proto.pactus.PeerInfo, 1));
};


/**
 * @param {?proto.pactus.PeerInfo|undefined} value
 * @return {!proto.pactus.GetPeerInfoResponse} returns this
*/
proto.pactus.GetPeerInfoResponse.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pactus.GetPeerInfoResponse} returns this
 */
proto.pactus.GetPeerInfoResponse.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pactus.GetPeerInfoResponse.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pactus.PeerInfo.repeatedFields_ = [4];



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
proto.pactus.PeerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pactus.PeerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pactus.PeerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.PeerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    moniker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    peerId: msg.getPeerId_asB64(),
    keysList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    flags: jspb.Message.getFieldWithDefault(msg, 5, 0),
    height: jspb.Message.getFieldWithDefault(msg, 6, 0),
    receivedMessages: jspb.Message.getFieldWithDefault(msg, 7, 0),
    invalidMessages: jspb.Message.getFieldWithDefault(msg, 8, 0),
    receivedBytes: jspb.Message.getFieldWithDefault(msg, 9, 0),
    status: jspb.Message.getFieldWithDefault(msg, 10, 0),
    lastSeen: jspb.Message.getFieldWithDefault(msg, 11, 0),
    sendSuccess: jspb.Message.getFieldWithDefault(msg, 12, 0),
    sendFailed: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.pactus.PeerInfo}
 */
proto.pactus.PeerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pactus.PeerInfo;
  return proto.pactus.PeerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pactus.PeerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pactus.PeerInfo}
 */
proto.pactus.PeerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoniker(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgent(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPeerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeys(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFlags(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReceivedMessages(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvalidMessages(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReceivedBytes(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastSeen(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSendSuccess(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSendFailed(value);
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
proto.pactus.PeerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pactus.PeerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pactus.PeerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pactus.PeerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoniker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPeerId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFlags();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getReceivedMessages();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getInvalidMessages();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getReceivedBytes();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getLastSeen();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getSendSuccess();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getSendFailed();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * optional string moniker = 1;
 * @return {string}
 */
proto.pactus.PeerInfo.prototype.getMoniker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setMoniker = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent = 2;
 * @return {string}
 */
proto.pactus.PeerInfo.prototype.getAgent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setAgent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes peer_id = 3;
 * @return {!(string|Uint8Array)}
 */
proto.pactus.PeerInfo.prototype.getPeerId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes peer_id = 3;
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {string}
 */
proto.pactus.PeerInfo.prototype.getPeerId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPeerId()));
};


/**
 * optional bytes peer_id = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPeerId()`
 * @return {!Uint8Array}
 */
proto.pactus.PeerInfo.prototype.getPeerId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPeerId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * repeated string keys = 4;
 * @return {!Array<string>}
 */
proto.pactus.PeerInfo.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};


/**
 * optional int32 flags = 5;
 * @return {number}
 */
proto.pactus.PeerInfo.prototype.getFlags = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setFlags = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 height = 6;
 * @return {number}
 */
proto.pactus.PeerInfo.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 received_messages = 7;
 * @return {number}
 */
proto.pactus.PeerInfo.prototype.getReceivedMessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setReceivedMessages = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 invalid_messages = 8;
 * @return {number}
 */
proto.pactus.PeerInfo.prototype.getInvalidMessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setInvalidMessages = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 received_bytes = 9;
 * @return {number}
 */
proto.pactus.PeerInfo.prototype.getReceivedBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setReceivedBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 status = 10;
 * @return {number}
 */
proto.pactus.PeerInfo.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 last_seen = 11;
 * @return {number}
 */
proto.pactus.PeerInfo.prototype.getLastSeen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setLastSeen = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 send_success = 12;
 * @return {number}
 */
proto.pactus.PeerInfo.prototype.getSendSuccess = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setSendSuccess = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 send_failed = 13;
 * @return {number}
 */
proto.pactus.PeerInfo.prototype.getSendFailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.pactus.PeerInfo} returns this
 */
proto.pactus.PeerInfo.prototype.setSendFailed = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


goog.object.extend(exports, proto.pactus);