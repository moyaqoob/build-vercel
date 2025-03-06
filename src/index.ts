import express from "express";
import aws from "aws-sdk";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./utils";

const app = express();

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());
//@ts-ignore
app.post("/deploy", async (req, res) => {
    const reqbody = req.body; // Assumes req.body contains the repo URL
    const git = simpleGit();
    const id = generate(); // Random ID generation for output folder

    try {
        // Validate req.body to ensure it contains a valid repo URL
        if (!reqbody.repoUrl || typeof reqbody.repoUrl !== "string") {
            return res.status(400).send({ error: "Invalid repoUrl" });
        }

        // Clone the repository into a unique folder
        await git.clone(reqbody.repoUrl, `output/${id}`);

        res.send({ message: "Repository cloned successfully", id });
    } catch (error) {
        console.error("Error with simple-git:", error);
        res.status(500).send({ error: "Error with simple-git", details: error.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
