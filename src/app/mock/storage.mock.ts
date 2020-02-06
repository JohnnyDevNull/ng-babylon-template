export class StorageMock implements Storage {
  public length = 0;
  public clear(): void { return null; }
  public getItem(key: string): string { return null; }
  public key(index: number): string { return null; }
  public removeItem(key: string): void { return null; }
  public setItem(key: string, value: string): void { return null; }
}
