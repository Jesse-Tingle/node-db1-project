const express = require("express");
const db = require("./data/dbConfig");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
});
