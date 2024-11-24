import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Home from "./pages/Home.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import PrivateRooute from "./pages/Auth/PrivateRooute.jsx";
import Profile from "./pages/User/Profile.jsx";
import AdminRoute from "./pages/Admin/AdminRoute.jsx";
import GenreList from "./pages/Admin/GenreList.jsx";
import CreateMovie from "./pages/Admin/CreateMovie.jsx";
import AdminMovieList from "./pages/Admin/AdminMovieList";
import UpdateMovie from "./pages/Admin/UpdateMovie.jsx";
import AllMovies from "./pages/Movies/AllMovies.jsx";
import MovieDetails from "./pages/Movies/MovieDetails.jsx";
import AllComment from "./pages/Admin/AllComment.jsx";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard.jsx";

//     Auth //

// Restricted

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />

      <Route path="" element={<PrivateRooute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/movies/genre" element={<GenreList />} />
        <Route path="/admin/movies/create" element={<CreateMovie />} />
        <Route path="/admin/movies-list" element={<AdminMovieList />} />
        <Route path="/admin/movies/update/:id" element={<UpdateMovie />} />
        <Route path="/admin/movies/comments" element={<AllComment />} />
        <Route path="/admin/movies/dashboard" element={<AdminDashboard />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
