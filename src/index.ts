import cors from "cors";
import express from "express";
import { simpleGit } from "simple-git";
import { getAllFiles } from "./file.js";
import { generate } from "./utils.js";
import path from "path"
const app = express();

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());
console.log(__dirname)
app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repoUrl;
  const id = generate();
  await simpleGit().clone(repoUrl, `output/${id}`);

  if (!repoUrl) {
    res.json({
      message: "please add the url",
    });
  }
  const files = getAllFiles(path.join(__dirname,`output/${id}`))
  console.log(files)

  res.json({
    message: "repository cloned successfully",
    id: id,
    files: files,
  });
});


app.listen(3000);