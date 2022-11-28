interface DataSourceInterface {
  read(filePath: string): void;
  write(): void;
};

export { DataSourceInterface };
