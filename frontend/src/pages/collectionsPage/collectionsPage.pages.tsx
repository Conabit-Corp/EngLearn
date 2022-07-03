import "./collectionsPage.pages.scss";
import { Collections } from "../../components/collections/collections.components";
import { Link, Route, Routes } from "react-router-dom";
import { CreateCollection } from "../export.pages";

export const CollectionsPage = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="createCollection" element={<CreateCollection />} />
      </Routes>

      <Routes>
        <Route path="" element={<Collections />} />
      </Routes>
    </>
  );
};
