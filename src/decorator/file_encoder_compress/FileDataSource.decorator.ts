import { FileDataSourceInterface } from "./fileDataSource.interface";

class FileDataSourceDecorator implements FileDataSourceInterface {
  protected fileDataSource: FileDataSourceInterface;

  constructor(fileDataSource: FileDataSourceInterface) {
    this.fileDataSource = fileDataSource
  }

  public write(filePath: string, data: Buffer): void {
    this.fileDataSource.write(filePath, data);
  }
}

export { FileDataSourceDecorator }
