import { Step } from "./step";

export interface RawTask {
  id: number;
  steps: Step[];
  note: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  _isComplete: boolean;
  _isFavorite: boolean;
  dueDate: Date | null;
  listId: string | null;
  reminderDate: Date | null;
  _belongsToMyDay: boolean;
}

export class Task {
  id!: number;
  note!: string;
  createdAt!: Date;
  updatedAt!: Date;
  steps: Step[] = [];
  dueDate!: Date | null;
  listId!: string | null;
  reminderDate!: Date | null;
  private _isComplete!: boolean;
  private _isFavorite!: boolean;
  private _belongsToMyDay!: boolean;

  constructor(public content: string, listId: string | null = null) {
    this.note = "";
    this.id = Date.now();
    this.listId = listId;
    this.isComplete = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static create(task: RawTask): Task {
    const _task = new Task(task.content, task.listId);
    _task.id = task.id;
    _task.note = task.note;
    _task.steps = task.steps;
    _task.createdAt = task.createdAt;
    _task.updatedAt = task.updatedAt;
    _task._isFavorite = task._isFavorite;
    _task._isComplete = task._isComplete;
    _task.reminderDate = task.reminderDate;
    _task.belongsToMyDay = task._belongsToMyDay;

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
    this._isFavorite = value;
    this.updateUpdatedAt();
  }

  get isFavorite(): boolean {
    return this._isFavorite;
  }

  set belongsToMyDay(value: boolean) {
    this._belongsToMyDay = value;
    this.updateUpdatedAt();
  }

  get belongsToMyDay(): boolean {
    return this._belongsToMyDay;
  }
}
