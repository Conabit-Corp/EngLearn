// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/exercise_service.proto

var proto_conabit_englearn_exercise_exercise_service_pb = require("../../../../proto/conabit/englearn/exercise/exercise_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ExerciseService = (function () {
  function ExerciseService() {}
  ExerciseService.serviceName = "conabit.englearn.exercise.ExerciseService";
  return ExerciseService;
}());

ExerciseService.StartNewExercise = {
  methodName: "StartNewExercise",
  service: ExerciseService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_exercise_exercise_service_pb.StartNewExerciseRequest,
  responseType: proto_conabit_englearn_exercise_exercise_service_pb.StartNewExerciseResponse
};

ExerciseService.FinishExercise = {
  methodName: "FinishExercise",
  service: ExerciseService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_exercise_exercise_service_pb.FinishExerciseRequest,
  responseType: proto_conabit_englearn_exercise_exercise_service_pb.Exercise
};

exports.ExerciseService = ExerciseService;

function ExerciseServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExerciseServiceClient.prototype.startNewExercise = function startNewExercise(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExerciseService.StartNewExercise, {
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

ExerciseServiceClient.prototype.finishExercise = function finishExercise(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExerciseService.FinishExercise, {
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

exports.ExerciseServiceClient = ExerciseServiceClient;

