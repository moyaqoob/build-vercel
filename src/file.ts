import fs from "fs" 
import path from "path"

export const getAllFiles = (folderPath:string)=>{
    let response:string[] = [];
    console.log("hello")
    const allFilesandFolders = fs.readdirSync(folderPath);
    allFilesandFolders.forEach(file=>{
        const fullFilePath = path.join(folderPath,file);
        if(fs.statSync(fullFilePath).isDirectory()){
            response = response.concat(getAllFiles(fullFilePath));
        }else{
            response.push(fullFilePath)
        }
    })
    
    return response;
}