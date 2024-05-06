import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "apac",
  endpoint: process.env.R2_CLOUDFLARE_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESSID,
    secretAccessKey: process.env.R2_SECRETKEY,
  },
});

export async function uploadFile({ Body, Key, ContentType, Dir }) {
  const bytes = await body.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const command = new PutObjectCommand({
    Bucket: "ecourse-ithbi",
    Body: buffer,
    Key: `${Dir}/${Key}`,
    ContentType,
  });

  try {
    const res = await s3Client.send(command);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
