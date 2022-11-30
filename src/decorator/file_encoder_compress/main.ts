import { FileDataSource } from "./FileDataSource"
import { join } from 'path';
import { FileDataSourceEncryptDecorator } from "./FileDataSourceEncrypt.decorator";
import { FileDataSourceCompressDecorator } from "./FileDataSourceCompress.decorator";

(() => {
  console.log('___====___ FileDataSource ___===___');
  const fileDataSource = new FileDataSource();

  const readFileDataSource = 'file_read';
  const readFilePath = join(`${__dirname}/files/${readFileDataSource}`);
  const data = fileDataSource.read(readFilePath);

  const writeFileDataSource = 'file_write_DataSource';
  const writeFileDataSourcePath = join(`${__dirname}/files/${writeFileDataSource}`)
  fileDataSource.write(writeFileDataSourcePath, data);
  console.log('___===___ END FileDataSource ___===___\n');

  console.log('___===___ FileDataSourceEncrypt ___===___');
  const fileDataSourceEncrypt =
    new FileDataSourceEncryptDecorator(fileDataSource);

  const writeEncryptedFileDataSource = 'file_write_EncryptedDataSource';
  const writeEncryptedFileDataSourcePath =
    join(`${__dirname}/files/${writeEncryptedFileDataSource}`);
  fileDataSourceEncrypt.write(writeEncryptedFileDataSourcePath, data);
  console.log('___===___ END FileDataSourceEncrypt ___===___\n');

  console.log('___===___ FileDataSourceCompressDecorator ___===___');
  const fileDataSourceCompress =
    new FileDataSourceCompressDecorator(fileDataSource);

  const writeCompressedFileDataSource = 'file_write_CompressedDataSource.zip';
  const writeCompressedFileDataSourcePath =
    join(`${__dirname}/files/${writeCompressedFileDataSource}`);
  fileDataSourceCompress.write(writeCompressedFileDataSourcePath, data);
  console.log('___===___ END FileDataSourceCompressed ___===___\n');


})()
