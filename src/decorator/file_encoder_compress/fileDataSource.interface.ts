interface FileDataSourceInterface {
  write(filePath: string, data: Buffer): void;
};

export { FileDataSourceInterface };
