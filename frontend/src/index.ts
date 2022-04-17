import { grpc } from "@improbable-eng/grpc-web";
import { LogoutRequest, SignInRequest, SignUpRequest } from "../proto/conabit/englearn/auth/auth_service_pb";
import { AuthService } from "../proto/conabit/englearn/auth/auth_service_pb_service";
import { Session } from "../proto/conabit/englearn/common/session_pb";

const logout = document.getElementById('logout')
const signIn = document.getElementById('signIn')
const signUp = document.getElementById('signUp')!

function logOutTest() {
    const logoutreq = new LogoutRequest()
    const session = new Session()
    session.setJwt('egor')
    logoutreq.setSession(session)
    grpc.unary(AuthService.Logout,
        {
            request: logoutreq,
            host: "http://localhost:4000",
            onEnd: (r) => {
                console.log(`response = ${r.message}, errors = ${r.statusMessage}`)
            }
        }
    )
}

function signInTest() {
    const req = new SignInRequest()
    req.setLogin("newUser000")
    req.setPassword("password")
    grpc.unary(AuthService.SignIn,
        {
            request: req,
            host: "http://localhost:4000",
            onEnd: (r) => {
                console.log(`response = ${r.message}, errors = ${r.statusMessage}`)
            }
        }
    )
}

function signUpTest() {
    const req = new SignUpRequest()
    req.setLogin("newUser000")
    req.setPassword("password")
    req.setRePassword("password")
    grpc.unary(AuthService.SignUp,
        {
            request: req,
            host: "http://localhost:4000",
            onEnd: (r) => {
                console.log(`response = ${r.message}, errors = ${r.statusMessage}`)
            }
        }
    )
}

signUp.onclick = (e) => {
    signUpTest()
}

logout?.addEventListener('click', (e) => {
    logOutTest()
})

signIn?.addEventListener('click', (e) => {
    signInTest()
})
