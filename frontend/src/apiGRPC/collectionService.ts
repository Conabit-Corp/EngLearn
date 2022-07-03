import { grpc } from "@improbable-eng/grpc-web";
import { WordCollectionService } from "../../proto/conabit/englearn/collection/collection_service_pb_service";
import { WordCollection } from "../../proto/conabit/englearn/collection/collection_models_pb.d";
import { CreateWordCollectionRequest, GetUserCollectionsRequest } from "../../proto/conabit/englearn/collection/collection_transport_pb";
import { Session } from "../../proto/conabit/englearn/common/session_pb";
import { newWordCollection } from "../utils/export.utils";
import { WordObj } from "../pages/createCollection/createCollection.pages";
import { NavigateFunction } from "react-router-dom";

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
  words: Array<WordObj>,
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
  console.log(req.toObject());

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
