import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { createS3Client, getBucketConfig } from './aws-config';

const s3Client = createS3Client();
const { bucketName, folderPrefix } = getBucketConfig();
const region = process.env.AWS_REGION ?? 'us-east-1';

export async function uploadFile(buffer: Buffer, fileName: string, isPublic = false): Promise<string> {
  const key = isPublic 
    ? `${folderPrefix}public/uploads/${Date.now()}-${fileName}`
    : `${folderPrefix}uploads/${Date.now()}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: buffer,
    ContentType: getContentType(fileName)
  });

  await s3Client.send(command);
  return key;
}

export async function getFileUrl(cloud_storage_path: string, isPublic: boolean): Promise<string> {
  if (isPublic) {
    return `https://${bucketName}.s3.${region}.amazonaws.com/${cloud_storage_path}`;
  }
  
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: cloud_storage_path
  });
  
  return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
}

export async function deleteFile(key: string): Promise<void> {
  const command = new DeleteObjectCommand({
    Bucket: bucketName,
    Key: key
  });
  
  await s3Client.send(command);
}

function getContentType(fileName: string): string {
  const ext = fileName.split('.').pop()?.toLowerCase();
  const types: Record<string, string> = {
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    txt: 'text/plain',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif'
  };
  return types[ext ?? ''] ?? 'application/octet-stream';
}
