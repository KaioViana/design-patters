import { FileDataSourceInterface } from "./fileDataSource.interface";
import { readFileSync, writeFileSync } from 'fs';

class FileDataSource implements FileDataSourceInterface {
  public read(filePath: string): Buffer {
    const rawdata = readFileSync(filePath);
    return rawdata
  }

  public write(filePath: string, data: Buffer): void {
    writeFileSync(filePath, data.toString());
  }
}

export { FileDataSource }
