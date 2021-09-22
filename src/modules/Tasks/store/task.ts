export class Task {
  id!: number;
  createdAt!: Date;
  updatedAt!: Date;
  listId!: string | null;
  private _isComplete!: boolean;
  private _isFavorite!: boolean;

  constructor(public content: string, listId = null) {
    this.id = Date.now();
    this.isComplete = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.listId = listId;
  }

  private updateUpdatedAt() {
    this.updatedAt = new Date();
  }

  set isComplete(value: boolean) {
    this._isComplete = value;
    this.updateUpdatedAt();
  }

  get isComplete(): boolean {
    return this._isComplete;
  }

  set isFavorite(value: boolean) {
    this._isComplete = value;
    this.updateUpdatedAt();
  }

  get isFavorite(): boolean {
    return this._isFavorite;
  }
}
