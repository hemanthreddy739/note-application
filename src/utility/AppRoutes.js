import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../page-templates/Layout.jsx";

import Signup from "../components/auth/Signup.jsx";
import Login from "../components/auth/Login.jsx";
import NoteForm from "../components/page-components/NoteForm.jsx";

import CategoryFolderCollection from "../components/page-components/CategoryFolderCollection.jsx";
import NoteList from "../components/page-components/NoteList.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<NoteForm />} />

      <Route path="allnotes" element={<CategoryFolderCollection />} />

      <Route path="/allnotes/:categoryName" element={<NoteList />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />

      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

export default router;
