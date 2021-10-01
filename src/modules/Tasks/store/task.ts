export interface RawTask {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  _isComplete: boolean;
  _isFavorite: boolean;
  listId: string | null;
}

export class Task {
  id!: number;
  createdAt!: Date;
  updatedAt!: Date;
  listId!: string | null;
  private _isComplete!: boolean;
  private _isFavorite!: boolean;

  constructor(public content: string, listId: string | null = null) {
    this.id = Date.now();
    this.listId = listId;
    this.isComplete = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static create(task: RawTask): Task {
    const _task = new Task(task.content, task.listId);
    _task.id = task.id;
    _task.createdAt = task.createdAt;
    _task.updatedAt = task.updatedAt;
    _task._isFavorite = task._isFavorite;
    _task._isComplete = task._isComplete;

    return _task;
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
