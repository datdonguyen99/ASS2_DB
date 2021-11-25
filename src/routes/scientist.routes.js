const router = require("express-promise-router")();
const scientistController = require("../controllers/scientist.controller");

router.get("/scientist", scientistController.getListScientist);
router.get("/scientist/:id", scientistController.getListScientistByID);
router.get("/scientist/reviewer", scientistController.getInforReviewer);
router.get("/scientist/editor", scientistController.getInforEditor);
router.get("/scientist/author", scientistController.getInforAuthor);

router.post("/scientist/create", scientistController.createScientist);

router.put("/scientist/update/:id", scientistController.updateScientist);

router.delete("/scientist/delete/:id", scientistController.deleteScientist);

module.exports = router;
