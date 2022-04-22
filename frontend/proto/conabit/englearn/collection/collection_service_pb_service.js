// package: conabit.englearn.collection
// file: proto/conabit/englearn/collection/collection_service.proto

var proto_conabit_englearn_collection_collection_service_pb = require("../../../../proto/conabit/englearn/collection/collection_service_pb");
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
  requestType: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse
};

WordCollectionService.UpdateWordCollection = {
  methodName: "UpdateWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse
};

WordCollectionService.GetWordCollection = {
  methodName: "GetWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_service_pb.GetWordCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_service_pb.WordCollection
};

WordCollectionService.CreateGroupWordCollection = {
  methodName: "CreateGroupWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_service_pb.CreateGroupCollectionRequest,
  responseType: proto_conabit_englearn_collection_collection_service_pb.CreateWordCollectionResponse
};

WordCollectionService.GetGroupWordCollections = {
  methodName: "GetGroupWordCollections",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_collection_collection_service_pb.GetGroupCollectionsRequest,
  responseType: proto_conabit_englearn_collection_collection_service_pb.GetGroupCollectionsResponse
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

WordCollectionServiceClient.prototype.updateWordCollection = function updateWordCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.UpdateWordCollection, {
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

exports.WordCollectionServiceClient = WordCollectionServiceClient;

