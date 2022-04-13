// package: conabit.englearn.exercise
// file: proto/conabit/englearn/exercise/task_service.proto

var proto_conabit_englearn_exercise_task_service_pb = require("../../../../proto/conabit/englearn/exercise/task_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TaskService = (function () {
  function TaskService() {}
  TaskService.serviceName = "conabit.englearn.exercise.TaskService";
  return TaskService;
}());

TaskService.SolveTask = {
  methodName: "SolveTask",
  service: TaskService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_exercise_task_service_pb.SolveTaskRequest,
  responseType: proto_conabit_englearn_exercise_task_service_pb.SolveTaskResponse
};

exports.TaskService = TaskService;

function TaskServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TaskServiceClient.prototype.solveTask = function solveTask(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TaskService.SolveTask, {
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

exports.TaskServiceClient = TaskServiceClient;

