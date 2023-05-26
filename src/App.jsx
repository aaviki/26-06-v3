import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/pages/home/Home";
import { Details } from "./components/pages/details/Details";
import { Root } from "./Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Items } from "./components/pages/items/Items";
import { Posts } from "./components/pages/posts/Posts";
import { Notfound } from "./components/pages/not-found/Notfound";
import { Login } from "./components/pages/login/Login";
import { Register } from "./components/pages/register/Register";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userReducer";
import { Provider } from "react-redux";
import { UserContext } from "./contexts/userContext";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

function App() {
  const [hasUser, setHasUser] = useState(false);

  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<Details />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );

  return (
    <UserContext.Provider value={{ hasUser, setHasUser }}>
      <div className="App">
        <RouterProvider router={browserRouter} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
