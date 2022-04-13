// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/collection_service.proto

var proto_conabit_englearn_exercise_collection_service_pb = require("../../../../proto/conabit/englearn/exercise/collection_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WordCollectionService = (function () {
  function WordCollectionService() {}
  WordCollectionService.serviceName = "conabit.englearn.exercise.WordCollectionService";
  return WordCollectionService;
}());

WordCollectionService.CreateWordCollection = {
  methodName: "CreateWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_exercise_collection_service_pb.CreateWordCollectionRequest,
  responseType: proto_conabit_englearn_exercise_collection_service_pb.WordCollection
};

WordCollectionService.UpdateWordCollection = {
  methodName: "UpdateWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_exercise_collection_service_pb.CreateWordCollectionRequest,
  responseType: proto_conabit_englearn_exercise_collection_service_pb.WordCollection
};

WordCollectionService.FindWordCollection = {
  methodName: "FindWordCollection",
  service: WordCollectionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_exercise_collection_service_pb.FindWordCollectionRequest,
  responseType: proto_conabit_englearn_exercise_collection_service_pb.WordCollection
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

WordCollectionServiceClient.prototype.findWordCollection = function findWordCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordCollectionService.FindWordCollection, {
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

