import { FileDataSourceDecorator } from "./FileDataSource.decorator";
import crypto from 'crypto';

class FileDataSourceEncryptDecorator extends FileDataSourceDecorator {
  private encrypt(data: Buffer): Buffer {
    const algorithm = 'aes-256-ctr';
    let key = 'secret-key';
    key =
      crypto.createHash('sha256').update(key).digest('base64').substring(0, 32);

    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    const result = Buffer.concat([iv, cipher.update(data), cipher.final()]);

    return result;
  }
  public write(filePath: string, data: Buffer): void {
    const encryptedData = this.encrypt(data);
    super.write(filePath, encryptedData);
  }
}

export { FileDataSourceEncryptDecorator }
