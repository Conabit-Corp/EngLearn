import { grpc } from "@improbable-eng/grpc-web";
import { ProtobufMessage } from "@improbable-eng/grpc-web/dist/typings/message";
import { UnaryOutput } from "@improbable-eng/grpc-web/dist/typings/unary";
import { AuthResponse, LogoutRequest, SignInRequest, SignUpRequest } from "../../proto/conabit/englearn/auth/auth_service_pb";
import { AuthService } from "../../proto/conabit/englearn/auth/auth_service_pb_service";
import { Session } from "../../proto/conabit/englearn/common/session_pb";

export const signInRequest = (login: string, password: string, cb: () => void): void => {
  const req = new SignInRequest()
  req.setLogin(login);
  req.setPassword(password);
  grpc.unary(AuthService.SignIn,
    {
      request: req,
      host: "http://localhost:4000",
      onEnd: res => {
        const { status, statusMessage, message } = res;
        if (status === grpc.Code.OK) {
          let resMessage = message as AuthResponse;
          let result = resMessage.getSession()?.getJwt()
          if (result === undefined) {
            console.error('result undefined');
          } else {
            localStorage.setItem('token', result);
            cb();
          }
        } else {
          console.error(statusMessage);
        }
      }
    }
  )
}

export const signUp = (login: string, password: string, rePassword: string, cb: () => void) => {
  const req = new SignUpRequest()
  req.setLogin(login)
  req.setPassword(password)
  //I use only password. For first connect grpc without second input for repeat password
  req.setRePassword(password)
  grpc.unary(AuthService.SignUp,
    {
      request: req,
      host: "http://localhost:4000",
      onEnd: res => {
        const { status, statusMessage, message } = res;
        if (status === grpc.Code.OK) {
          let resMessage = message as AuthResponse;
          let result = resMessage.getSession()?.getJwt()
          if (result === undefined) {
            console.error('result undefined');
          } else {
            localStorage.setItem('token', result);
            cb();
          }
        } else {
          console.error(statusMessage);
        }
      }
    }
  )
}

export const logOutRequest = (cb: () => void) => {
  const logoutreq = new LogoutRequest();
  const session = new Session();
  session.setJwt(localStorage.getItem('token') ?? '');
  logoutreq.setSession(session)
  grpc.unary(AuthService.Logout,
    {
      request: logoutreq,
      host: "http://localhost:4000",
      onEnd: res => {
        const { status, statusMessage } = res;
        if (status === grpc.Code.OK) {
          cb();
        } else {
          console.error(statusMessage);
        }
      }
    }
  )
}
