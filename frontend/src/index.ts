import { grpc } from "@improbable-eng/grpc-web";
import { LogoutRequest } from "../proto/conabit/englearn/auth/auth_service_pb";
import { AuthService } from "../proto/conabit/englearn/auth/auth_service_pb_service";
import { Session } from "../proto/conabit/englearn/common/session_pb";

const logout = document.getElementById('logout')

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

logout?.addEventListener('click', (e) => {
    logOutTest()
})