// package: conabit.englearn.group
// file: proto/conabit/englearn/group/group_service.proto

var proto_conabit_englearn_group_group_service_pb = require("../../../../proto/conabit/englearn/group/group_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GroupService = (function () {
  function GroupService() {}
  GroupService.serviceName = "conabit.englearn.group.GroupService";
  return GroupService;
}());

GroupService.CreateGroup = {
  methodName: "CreateGroup",
  service: GroupService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_group_group_service_pb.CreateGroupRequest,
  responseType: proto_conabit_englearn_group_group_service_pb.CreateGroupResponse
};

GroupService.AddToGroup = {
  methodName: "AddToGroup",
  service: GroupService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_group_group_service_pb.AddToGroupRequest,
  responseType: proto_conabit_englearn_group_group_service_pb.AddToGroupResponse
};

GroupService.MyInvations = {
  methodName: "MyInvations",
  service: GroupService,
  requestStream: false,
  responseStream: true,
  requestType: proto_conabit_englearn_group_group_service_pb.MyInvationsRequest,
  responseType: proto_conabit_englearn_group_group_service_pb.GroudInvation
};

GroupService.JoinGroup = {
  methodName: "JoinGroup",
  service: GroupService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_group_group_service_pb.JoinGroupRequest,
  responseType: proto_conabit_englearn_group_group_service_pb.JoinGroupResponse
};

GroupService.RejectInvation = {
  methodName: "RejectInvation",
  service: GroupService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_group_group_service_pb.RejectInvationRequest,
  responseType: proto_conabit_englearn_group_group_service_pb.RejectInvationReponse
};

GroupService.MyGroups = {
  methodName: "MyGroups",
  service: GroupService,
  requestStream: false,
  responseStream: false,
  requestType: proto_conabit_englearn_group_group_service_pb.MyGroupsRequest,
  responseType: proto_conabit_englearn_group_group_service_pb.MyGroupsResponse
};

exports.GroupService = GroupService;

function GroupServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GroupServiceClient.prototype.createGroup = function createGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GroupService.CreateGroup, {
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

GroupServiceClient.prototype.addToGroup = function addToGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GroupService.AddToGroup, {
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

GroupServiceClient.prototype.myInvations = function myInvations(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(GroupService.MyInvations, {
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

GroupServiceClient.prototype.joinGroup = function joinGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GroupService.JoinGroup, {
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

GroupServiceClient.prototype.rejectInvation = function rejectInvation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GroupService.RejectInvation, {
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

GroupServiceClient.prototype.myGroups = function myGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GroupService.MyGroups, {
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

exports.GroupServiceClient = GroupServiceClient;

