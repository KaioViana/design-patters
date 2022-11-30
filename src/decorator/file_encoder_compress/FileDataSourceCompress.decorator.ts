import zlib from 'zlib'
import { FileDataSourceDecorator } from './FileDataSource.decorator';

class FileDataSourceCompressDecorator extends FileDataSourceDecorator {
  private compress(data: Buffer): Buffer {
    const deflated = zlib.deflateSync(data);
    return deflated;
  }
  public write(filePath: string, data: Buffer): void {
    const compressedData = this.compress(data);
    super.write(filePath, compressedData);
  }
}

export { FileDataSourceCompressDecorator }
