const applicantInfo = require("../Models/applicants");

class applicantsController {
  static async createApplicant(req, res) {
    const applicants = await applicantInfo.create(req.body);
    if (!applicants) {
      return res.status(404).json({ error: "application failed" });
    }
    return res
      .status(200)
      .json({ message: "applicant send successfully", data: applicants });
  }

  static async getApplicants(req, res) {
    const allApplicants = await applicantInfo.find();
    if (!allApplicants) {
      return res.status(404).json({ error: "not able to retrive applicants" });
    }
    return res
      .status(200)
      .json({ message: "applicants found successfully", data: allApplicants });
  }

  static async getOneApplicant(req, res) {
    const applicant = await applicantInfo.findById(req.params.id);
    if (!applicant) {
      return res.status(404).json({ error: "applicant not found" });
    }
    return res
      .status(200)
      .json({ message: "applicant found", data: applicant });
  }
  static async updateOneApplicant(req, res) {
    const applicant = await applicantInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!applicant) {
      return res.status(404).json({ error: "applicant update failed" });
    }
    return res
      .status(200)
      .json({ message: "applicant updated successfully", data: applicant });
  }
  static async deleteApplicant(req, res) {
    const deletedApplicant = await applicantInfo.findByIdAndDelete(
      req.params.id
    );
    if (!deletedApplicant) {
      return res.status(404).json({ error: "applicant not deleted " });
    }
    return res.status(200).json({
      message: "applicant deleted successfully",
      data: deletedApplicant,
    });
  }
}

module.exports = applicantsController;
