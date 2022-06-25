import "./createCollection.pages.scss";
import { AboutCollection, FormNewWord } from "../../components/createCollection/export.createCollection.components";

export const CreateCollection = (): JSX.Element => {
  return (
    <div className="createCollectionContainer">
      <AboutCollection />
      <FormNewWord />
    </div>
  )
}
