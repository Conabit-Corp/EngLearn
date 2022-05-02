// package: conabit.englearn.collection
// file: proto/conabit/englearn/collection/collection_service.proto

var proto_conabit_englearn_collection_collection_service_pb = require("../../../../proto/conabit/englearn/collection/collection_service_pb");
var proto_conabit_englearn_collection_collection_transport_pb = require("../../../../proto/conabit/englearn/collection/collection_transport_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WordCollectionService = (function () {
  function WordCollectionService() {}
  WordCollectionService.serviceName = "conabit.englearn.collection.WordCollectionService";
  return WordCollectionService;
}());

WordCollectionService.CreateWordCollection = {
  methodName: "CreateWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionResponse
};

WordCollectionService.GetWordCollection = {
  methodName: "GetWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_transport_pb.GetWordCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_transport_pb.GetWordCollectionResponse
};

WordCollectionService.CreateGroupWordCollection = {
  methodName: "CreateGroupWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_transport_pb.CreateGroupCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_transport_pb.CreateWordCollectionResponse
};

WordCollectionService.GetUserWordCollections = {
  methodName: "GetUserWordCollections",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_transport_pb.GetUserCollectionsRequest,
  responseType: proto_conabit_englearn_collection_collection_transport_pb.GetUserCollectionsResponse
};

WordCollectionService.GetGroupWordCollections = {
  methodName: "GetGroupWordCollections",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_transport_pb.GetGroupCollectionsRequest,
  responseType: proto_conabit_englearn_collection_collection_transport_pb.GetGroupCollectionsResponse
};

WordCollectionService.DeleteWordCollection = {
  methodName: "DeleteWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_transport_pb.DeleteWordCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_transport_pb.DeleteWordCollectionResponse
};

WordCollectionService.AddWordToCollection = {
  methodName: "AddWordToCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_transport_pb.AddWordToCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_transport_pb.AddWordToCollectionResponse
};

WordCollectionService.RemoveWordFromCollection = {
  methodName: "RemoveWordFromCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_transport_pb.RemoveWordFromCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_transport_pb.RemoveWordFromCollectionResponse
};

WordCollectionService.EditWordFromCollection = {
  methodName: "EditWordFromCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_transport_pb.EditWordFromCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_transport_pb.EditWordFromCollectionResponse
};

exports.WordCollectionService = WordCollectionService;

function WordCollectionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WordCollectionServiceClient.prototype.createWordCollection = function createWordCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.CreateWordCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WordCollectionServiceClient.prototype.getWordCollection = function getWordCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.GetWordCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WordCollectionServiceClient.prototype.createGroupWordCollection = function createGroupWordCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.CreateGroupWordCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WordCollectionServiceClient.prototype.getUserWordCollections = function getUserWordCollections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.GetUserWordCollections, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WordCollectionServiceClient.prototype.getGroupWordCollections = function getGroupWordCollections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.GetGroupWordCollections, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WordCollectionServiceClient.prototype.deleteWordCollection = function deleteWordCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.DeleteWordCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WordCollectionServiceClient.prototype.addWordToCollection = function addWordToCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.AddWordToCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WordCollectionServiceClient.prototype.removeWordFromCollection = function removeWordFromCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.RemoveWordFromCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WordCollectionServiceClient.prototype.editWordFromCollection = function editWordFromCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.EditWordFromCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.WordCollectionServiceClient = WordCollectionServiceClient;

