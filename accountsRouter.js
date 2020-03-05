const express = require("express");
const db = require("./data/dbConfig");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const accounts = await db.select("*").from("accounts");
		res.json(accounts);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const accounts = await db
			.select("*")
			.from("accounts")
			.where("id", req.params.id)
			.limit(1);
		res.json(accounts);
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

// router.put("/:id", async (req, res, next) => {
// 	try {
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.delete("/:id", async (req, res, next) => {
// 	try {
// 	} catch (error) {
// 		next(error);
// 	}
// });
module.exports = router;
