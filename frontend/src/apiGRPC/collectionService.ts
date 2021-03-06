import { grpc } from "@improbable-eng/grpc-web";
import { WordCollectionService } from "../../proto/conabit/englearn/collection/collection_service_pb_service";
import { WordCollection, WordPair } from "../../proto/conabit/englearn/collection/collection_models_pb.d";
import { AddWordToCollectionRequest, CreateWordCollectionRequest, DeleteWordCollectionRequest, GetUserCollectionsRequest, GetWordCollectionRequest, GetWordCollectionResponse } from "../../proto/conabit/englearn/collection/collection_transport_pb";
import { Session } from "../../proto/conabit/englearn/common/session_pb";
import { newWordCollection } from "../utils/export.utils";
import { NavigateFunction } from "react-router-dom";
import { newWordPair } from "../utils/collectionService/newWordPair.utils";

export interface CollectionOverviewsResponse {
  collections: CollectionsOverwies
}

interface CollectionsOverwies {
  collectionsList: Array<CollectionOverview>
}

interface CollectionOverview {
  collectionId: string
  collectionName: string
  collectionDescription: string
}

export const createCollectionRequest = (
  collectionTitle: string,
  collectionDescription: string,
  words: Array<WordPair.AsObject>,
  navigate: NavigateFunction,
) => {
  const session = new Session()
  const req = new CreateWordCollectionRequest()
  session.setJwt(localStorage.getItem('token') ?? '')
  req.setSession(session)
  req.setWordCollection(newWordCollection(collectionTitle, collectionDescription, words))
  grpc.unary(WordCollectionService.CreateWordCollection,
    {
      request: req,
      host: "http://10.3.21.205:4003",
      onEnd: res => {
        const { status, statusMessage, message } = res;

        let resMessage = message as CreateWordCollectionRequest;

        let result = resMessage.toObject().collectionId;

        navigate(`/collections/${result}`)
      }
    }
  )
}

export const getWordsCollections = (setCollections: React.Dispatch<React.SetStateAction<CollectionOverviewsResponse | undefined>>) => {
  const req = new GetUserCollectionsRequest()
  const session = new Session()
  session.setJwt(localStorage.getItem('token') ?? '')
  req.setSession(session)
  grpc.unary(WordCollectionService.GetUserWordCollections,
    {
      request: req,
      host: "http://10.3.21.205:4003",
      onEnd: (r) => {
        const response = r.message?.toObject() as CollectionOverviewsResponse;
        setCollections(response);
      }
    })
}

export const getCollectionByIdRequest = (
  id: string,
  setCollection: React.Dispatch<React.SetStateAction<WordCollection.AsObject | undefined>>,
  setWords: React.Dispatch<React.SetStateAction<WordPair.AsObject[]>>
) => {
  const req = new GetWordCollectionRequest()
  const session = new Session()
  session.setJwt(localStorage.getItem('token') ?? '')
  req.setSession(session)
  req.setCollectionId(id)
  grpc.unary(WordCollectionService.GetWordCollection,
    {
      request: req,
      host: "http://10.3.21.205:4003",
      onEnd: res => {
        const { status, statusMessage, message } = res;
        let resMessage = message as GetWordCollectionResponse;
        setCollection(resMessage.toObject().collection);
        setWords(resMessage.toObject().collection?.wordsList!)
      }
    })
}

export const addWordPairRequest = (
  collectionId: string,
  newWord: WordPair.AsObject,
) => {
  const req = new AddWordToCollectionRequest()
  const session = new Session()
  session.setJwt(localStorage.getItem('token') ?? '')
  req.setSession(session)
  req.setCollectionId(collectionId)
  req.setWordPair(newWordPair(newWord))
  grpc.unary(WordCollectionService.AddWordToCollection,
    {
      request: req,
      host: "http://10.3.21.205:4003",
      onEnd: (r) => {
        console.log(`response = ${r.message}, errors = ${r.statusMessage}`)
      }
    })
}

export const deleteCollectionRequest = (
  collectionId: string,
) => {
  const req = new DeleteWordCollectionRequest()
  const session = new Session()
  session.setJwt(localStorage.getItem('token') ?? '')
  req.setSession(session)
  req.setCollectionId(collectionId)
  grpc.unary(WordCollectionService.DeleteWordCollection, {
    request: req,
    host: "http://10.3.21.205:4003",
    onEnd: (r) => {
      console.log(`response = ${r.message}, errors = ${r.statusMessage}`);
    }
  })
}

