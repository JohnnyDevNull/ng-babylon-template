import { DocumentMock } from './document.mock';
import { StorageMock } from './storage.mock';

export class WindowMock extends Window {
  public override document = new DocumentMock();
  public override localStorage = new StorageMock();
  public override sessionStorage = new StorageMock();
}
