// package: conabit.englearn.dashboard
// file: proto/conabit/englearn/dashboard/dashboard_service.proto

var proto_conabit_englearn_dashboard_dashboard_service_pb = require("../../../../proto/conabit/englearn/dashboard/dashboard_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DashboardService = (function () {
  function DashboardService() {}
  DashboardService.serviceName = "conabit.englearn.dashboard.DashboardService";
  return DashboardService;
}());

DashboardService.WordOfDay = {
  methodName: "WordOfDay",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_dashboard_dashboard_service_pb.WordOfDayRequest,
  responseType: proto_conabit_englearn_dashboard_dashboard_service_pb.WordOfDayResponse
};

DashboardService.MyStatisticsOverwiev = {
  methodName: "MyStatisticsOverwiev",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_dashboard_dashboard_service_pb.MyStatisticsOverwievRequest,
  responseType: proto_conabit_englearn_dashboard_dashboard_service_pb.MyStatisticsOverwievResponse
};

DashboardService.WordsToRepeat = {
  methodName: "WordsToRepeat",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_dashboard_dashboard_service_pb.WordsToRepeatRequest,
  responseType: proto_conabit_englearn_dashboard_dashboard_service_pb.WordsToRepeatResponse
};

exports.DashboardService = DashboardService;

function DashboardServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DashboardServiceClient.prototype.wordOfDay = function wordOfDay(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.WordOfDay, {
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

DashboardServiceClient.prototype.myStatisticsOverwiev = function myStatisticsOverwiev(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.MyStatisticsOverwiev, {
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

DashboardServiceClient.prototype.wordsToRepeat = function wordsToRepeat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.WordsToRepeat, {
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

exports.DashboardServiceClient = DashboardServiceClient;

