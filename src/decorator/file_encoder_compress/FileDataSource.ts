import { DataSourceInterface } from "./fileDataSource.interface";
import { join } from 'path'

abstract class FileDataSource implements DataSourceInterface {
  public read(filePath: string): void {

  }

  public write(): void {

  }
}
