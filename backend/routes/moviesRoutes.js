import express from "express";

const router = express.Router();

// Controllers
import {
  createMovie,
  getAllMovies,
  getSpecificMovie,
  updateMovie,
  movieReview,
  deleteMovie,
  deleteComment,
  getNewMovies,
  topMovies,
  randomMovies,
} from "../controllers/movieController.js";

// MiddleWares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";

//Public Routes
router.get("/all-movies", getAllMovies);
router.get("/specific-movie/:id", getSpecificMovie);
router.get("/new-movies", getNewMovies);
router.get("/top-movies", topMovies);
router.get("/random-movies", randomMovies);

//Ristriced Routes
router.post("/:id/reviews", authenticate, checkId, movieReview);

// Admin Routers
router.post("/create-movie", authenticate, authorizeAdmin, createMovie);
router.put("/update-movie/:id", authenticate, authorizeAdmin, updateMovie);
router.delete("/delete-movie/:id", authenticate, authorizeAdmin, deleteMovie);
router.delete(
  "/delete-comment/:id",
  authenticate,
  authorizeAdmin,
  deleteComment
);

export default router;
