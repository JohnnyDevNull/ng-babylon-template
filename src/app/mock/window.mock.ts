import { DocumentMock } from './document.mock';
import { StorageMock } from './storage.mock';

export class WindowMock extends Window {
  public document = new DocumentMock();
  public localStorage = new StorageMock();
  public sessionStorage = new StorageMock();
}
