export class Task {
  id!: number;
  private _isComplete!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  listId!: string | null;

  constructor(public content: string, listId = null) {
    this.id = Date.now();
    this.isComplete = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.listId = listId;
  }

  set isComplete(value: boolean) {
    this._isComplete = value;
    this.updatedAt = new Date();
  }

  get isComplete(): boolean {
    return this._isComplete;
  }
}
