import "./newWordsTable.components.scss";
import { WordRow } from "./wordRow.components";

export const NewWordsTable = (): JSX.Element => {
  return (
    <div className="newWordsTable">
      {/* <span className="newWordsTable__warning">
        You can add words now or in the future
      </span> */}

      <WordRow />
    </div>
  )
}
