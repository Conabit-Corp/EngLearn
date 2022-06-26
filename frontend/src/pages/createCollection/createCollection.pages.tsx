import "./createCollection.pages.scss";
import { AboutCollection, AddingNewWords, CreateCollectionButtons } from "../../components/createCollection/export.createCollection.components";

export const CreateCollection = (): JSX.Element => {
  return (
    <div className="createCollectionContainer">
      <AboutCollection />
      <AddingNewWords />
      <CreateCollectionButtons />
    </div>
  )
}
