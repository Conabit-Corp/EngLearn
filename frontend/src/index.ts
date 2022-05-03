import { grpc } from "@improbable-eng/grpc-web";
import { LogoutRequest, SignInRequest, SignUpRequest } from "../proto/conabit/englearn/auth/auth_service_pb";
import { AuthService } from "../proto/conabit/englearn/auth/auth_service_pb_service";
import { Word, WordCollection, WordPair } from "../proto/conabit/englearn/collection/collection_models_pb";
import { WordCollectionService } from "../proto/conabit/englearn/collection/collection_service_pb_service";
import { AddWordToCollectionRequest, CreateWordCollectionRequest, GetUserCollectionsRequest, GetUserCollectionsResponse, GetWordCollectionRequest } from "../proto/conabit/englearn/collection/collection_transport_pb";
import { Session } from "../proto/conabit/englearn/common/session_pb";

const logoutButton = document.getElementById('logout')!
const signInButton = document.getElementById('signIn')!
const signUpButton = document.getElementById('signUp')!
const createCollectionButton = document.getElementById('create')!
const myCollectionsButton = document.getElementById('myCollections')!
const getCollectionByIdButton = document.getElementById('getCollectionById')!
const addWordPairButton = document.getElementById('addWordPairByCollectionId')!
const getCollectionByIdInput = document.getElementById('collectionIdInput')! as HTMLInputElement

function logOut() {
    const logoutreq = new LogoutRequest()
    const session = new Session()
    session.setJwt(localStorage.getItem('token') ?? '')
    logoutreq.setSession(session)
    grpc.unary(AuthService.Logout,
        {
            request: logoutreq,
            host: "http://localhost:4000",
            onEnd: (r) => {
                localStorage.removeItem('token')
                console.log(`response = ${r.message}, errors = ${r.statusMessage}`)
            }
        }
    )
}

function signIn() {
    const req = new SignInRequest()
    req.setLogin("newUser333")
    req.setPassword("password")
    grpc.unary(AuthService.SignIn,
        {
            request: req,
            host: "http://localhost:4000",
            onEnd: (r) => {
                console.log(`response = ${r.message}, errors = ${r.statusMessage}`);
                localStorage.setItem('token', r.message + '');
            }
        }
    )
}

function signUp() {
    const req = new SignUpRequest()
    req.setLogin("newUser333")
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

function createCollection() {
    const session = new Session()
    const req = new CreateWordCollectionRequest()
    session.setJwt(localStorage.getItem('token') ?? '')
    req.setSession(session)
    req.setWordCollection(newWordCollection())
    grpc.unary(WordCollectionService.CreateWordCollection,
        {
            request: req,
            host: "http://localhost:4003",
            onEnd: (r) => {
                console.log(`response = ${r.message}, errors = ${r.statusMessage}`)
            }
        }
    )
}

function getWordCollections() {
    const req = new GetUserCollectionsRequest()
    const session = new Session()
    session.setJwt(localStorage.getItem('token') ?? '')
    req.setSession(session)
    grpc.unary(WordCollectionService.GetUserWordCollections,
        {
            request: req,
            host: "http://localhost:4003",
            onEnd: (r) => {
                const response = r.message?.toObject() as CollectionOverviewsResponse
                console.log(response)
            }
        })
}

function getCollectionById() {
    const req = new GetWordCollectionRequest()
    const session = new Session()
    session.setJwt(localStorage.getItem('token') ?? '')
    req.setSession(session)
    req.setCollectionId(getCollectionByIdInput.value)
    grpc.unary(WordCollectionService.GetWordCollection,
        {
            request: req,
            host: "http://localhost:4003",
            onEnd: (r) => {
                console.log(r.message?.toObject())
            }
        })
}

function addWordPair() {
    const req = new AddWordToCollectionRequest()
    const session = new Session()
    session.setJwt(localStorage.getItem('token') ?? '')
    req.setSession(session)
    req.setCollectionId(getCollectionByIdInput.value)
    req.setWordPair(newWordPair())
    grpc.unary(WordCollectionService.AddWordToCollection,
        {
            request: req,
            host: "http://localhost:4003",
            onEnd: (r) => {
                console.log(`response = ${r.message}, errors = ${r.statusMessage}`)
            }
        })
}

signUpButton.onclick = (e) => signUp()

signInButton.onclick = (e) => signIn()

logoutButton.onclick = (e) => logOut()

createCollectionButton.onclick = (e) => createCollection()

myCollectionsButton.onclick = (e) => getWordCollections()

getCollectionByIdButton.onclick = (e) => getCollectionById()

addWordPairButton.onclick = (e) => addWordPair()

interface CollectionOverviewsResponse {
    overview: CollectionsOverwies
}

interface CollectionsOverwies {
    collectionsList: Array<CollectionOverview>
}

interface CollectionOverview {
    collectionId: string
    collectionName: string
}

function newWordCollection(): WordCollection {
    const words = new WordCollection()
    words.setName("duuuuude")
    words.setDescription("yes, its what?")
    for (let idx = 0; idx < 1; idx++) {
        words.addWords(newWordPair())
    }
    console.log(words.toObject())
    return words
}

function newWordPair(): WordPair {
    const pair = new WordPair()
    const w1 = new Word()
    w1.setCountryCode("ru")
    w1.setValue("АРБУЗ")

    const w2 = new Word()
    w2.setCountryCode("en")
    w2.setValue("WATERMELON")

    pair.setWord1(w1)
    pair.setWord2(w2)
    return pair
}