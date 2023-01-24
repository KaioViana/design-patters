interface ActivityFactoryInterface<T> {
  createContinuousReplenishment(data: any): T;
  createReplenishment(data: any): T;
}

export { ActivityFactoryInterface };
