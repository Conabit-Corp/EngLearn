import { grpc } from "@improbable-eng/grpc-web";
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
      host: "http://10.3.21.205:4000",
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

export const signUp = (login: string, password: string, repeatPassword: string, cb: () => void) => {
  const req = new SignUpRequest()
  req.setLogin(login)
  req.setPassword(password)
  req.setRePassword(repeatPassword)
  grpc.unary(AuthService.SignUp,
    {
      request: req,
      host: "http://10.3.21.205:4000",
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
      host: "http://10.3.21.205:4000",
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
