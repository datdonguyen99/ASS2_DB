const router = require("express-promise-router")();
const paperController = require("../controllers/paper.controller");

router.get("/scientist", paperController.getListScientist);
router.get("/scientist/reviewer", paperController.getInforReviewer);

router.post("/paper", paperController.createPaper);
router.put("/paper/reviewer/:id", paperController.updateInfoReviewer);
router.put("/paper/:id", paperController.updatePaperByID);
router.get("/allPaper", paperController.listAllPaper);
router.get("/researchPaper", paperController.listResearchPaper);
router.get("/generalPaper", paperController.listGeneralPaper);
router.get("/reviewPaper", paperController.listReviewPaper);
router.get("/paper/reviewed/3year", paperController.getListReviewed3Year);
router.get("/paper/reviewing/author", paperController.getListAuthReviewing);
router.get("/paper/reviewed/author/list3year", paperController.getListPaperOfAuthorReviewed3Years);
router.get("/paper/reviewed/maxauthor", paperController.getListAuthorMaxReviewedPaper);
router.get("/paper/reviewed/result", paperController.getResultReviewedPaper);
router.get("/paper/reviewed/max3year", paperController.get3YearMaxReviewedPaper);
router.get("/paper/reviewed/acceptance", paperController.get3ReviewedPaperAcceptance);
router.get("/paper/reviewed/rejection", paperController.get3ReviewedPaperRejection);
router.get("/paper/reviewed/avg/5years", paperController.getAvgReviewedPaper5Years);

module.exports = router;
