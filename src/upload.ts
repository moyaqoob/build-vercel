import { S3 } from "aws-sdk" 

import * as AWS from "aws-sdk"

const s3 = AWS.S3{
    accessKey: process.env.ACCESS_KEY,
    secretAccessKey :process.env.SECRET_ACCESS_KEY
}

export const uploadFile=(filePath:string,fileName:string)=>{

}