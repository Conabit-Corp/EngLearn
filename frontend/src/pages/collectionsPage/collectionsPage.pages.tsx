import "./collectionsPage.pages.scss";
import { Collections } from "../../components/collections/collections.components";
import { Link, Route, Routes } from "react-router-dom";
import { Collection, CreateCollection } from "../export.pages";

export const CollectionsPage = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="createCollection" element={<CreateCollection />} />
        <Route path=":id" element={<Collection />} />
        <Route path="" element={<Collections />} />
      </Routes>
    </>
  );
};
