const Router = require("express");
const applicantsController = require("../Controllers/applicantsController");
const applicantRoute = Router();

applicantRoute.post("/apply", applicantsController.createApplicant);
applicantRoute.get("/all", applicantsController.getApplicants);
applicantRoute.get("/get/:id", applicantsController.getOneApplicant);
applicantRoute.patch("/update/:id", applicantsController.updateOneApplicant);
applicantRoute.delete("/delete/:id", applicantsController.deleteApplicant);
module.exports = applicantRoute;
