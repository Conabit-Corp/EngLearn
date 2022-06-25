import "./homePage.pages.scss";
import { Route, Routes, Link } from "react-router-dom";
import { CreateCollection } from "../export.pages";


export const HomePage = (): JSX.Element => {
  return (
    <div className="homePage">

      <Routes>
        <Route path="" element={<Link to="createCollection">create collection</Link>} />
      </Routes>



      <Routes>
        <Route path="createCollection" element={<CreateCollection />} />
      </Routes>

    </div>
  )
}
