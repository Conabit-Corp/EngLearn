// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/word_service.proto

var proto_conabit_englearn_exercise_word_service_pb = require("../../../../proto/conabit/englearn/exercise/word_service_pb");
var proto_conabit_englearn_common_session_pb = require("../../../../proto/conabit/englearn/common/session_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WordService = (function () {
  function WordService() {}
  WordService.serviceName = "conabit.englearn.exercise.WordService";
  return WordService;
}());

WordService.RegisterWordPair = {
  methodName: "RegisterWordPair",
  service: WordService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_exercise_word_service_pb.RegisterWordPairRequest,
  responseType: proto_conabit_englearn_exercise_word_service_pb.WordPair
};

WordService.CloneWordPair = {
  methodName: "CloneWordPair",
  service: WordService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_exercise_word_service_pb.CloneWordPairRequest,
  responseType: proto_conabit_englearn_exercise_word_service_pb.WordPair
};

WordService.FindUserWords = {
  methodName: "FindUserWords",
  service: WordService,
  requestStream: false,
  responseStream: true,
  requestType: proto_conabit_englearn_common_session_pb.Session,
  responseType: proto_conabit_englearn_exercise_word_service_pb.WordPair
};

exports.WordService = WordService;

function WordServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WordServiceClient.prototype.registerWordPair = function registerWordPair(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordService.RegisterWordPair, {
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

WordServiceClient.prototype.cloneWordPair = function cloneWordPair(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WordService.CloneWordPair, {
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

WordServiceClient.prototype.findUserWords = function findUserWords(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WordService.FindUserWords, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.WordServiceClient = WordServiceClient;

