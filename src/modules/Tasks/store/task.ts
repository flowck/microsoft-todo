import { Step } from "./step";
export class Task {
  id!: number;
  note!: string;
  steps!: Step[];
  createdAt!: Date;
  updatedAt!: Date;
  dueDate!: Date | null;
  listId!: string | null;
  reminderDate!: Date | null;
  private _isComplete!: boolean;
  private _isFavorite!: boolean;
  private _belongsToMyDay!: boolean;

  constructor(public content: string, listId = null) {
    this.steps = [];
    this.listId = listId;
    this.id = Date.now();
    this.isComplete = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
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
