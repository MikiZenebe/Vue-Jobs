import Job from "../models/Job.model.js";

export const createJob = async (req, res) => {
  try {
    const { title, type, description, location, salary, company } = req.body;
    const userId = req.user._id.toString();

    const newJob = new Job({
      user: userId,
      title,
      type,
      description,
      location,
      salary,
      company,
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log("Error in createPost controller: ", error);
  }
};
