const router = require("express-promise-router")();
const paperController = require("../controllers/paper.controller");

router.post("/paper",paperController.createPaper);
router.put("/paper/reviewer/:id", paperController.updateInfoReviewer);
router.put("/paper/:id", paperController.updatePaperByID);
router.get("/allPaper", paperController.listAllPaper);
router.get("/researchPaper", paperController.listResearchPaper);
router.get("/generalPaper", paperController.listGeneralPaper);
router.get("/reviewPaper", paperController.listReviewPaper);
router.get("/paper/reviewed/3year", paperController.getListReviewed3Year);
router.get("/paper/reviewing/author", paperController.getListAuthReviewing);

module.exports = router;
