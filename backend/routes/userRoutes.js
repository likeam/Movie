import express from "express";

// Controller

//Midleware

const router = express.Router();

router.route("/").post(createUser);

export default router;
