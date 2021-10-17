import { Step } from "./step";
import { TaskContainerType, TaskContainerTypes } from "@/common/typing/index";

export interface RawTask {
  id: number;
  steps: Step[];
  note: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  _isComplete: boolean;
  _isImportant: boolean;
  _isPlanned: boolean;
  _isMyDay: boolean;
  _isAssignedToMe: boolean;
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
  private _isImportant = false;
  private _isPlanned = false;
  private _isMyDay = false;
  private _isAssignedToMe = false;

  constructor(public content: string, taskType?: TaskContainerType) {
    this.note = "";
    this.id = Date.now();
    this.listId = null;
    this.isComplete = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();

    if (taskType === TaskContainerTypes.IMPORTANT) {
      this.isImportant = true;
    }

    if (taskType === TaskContainerTypes.PLANNED) {
      this.isPlanned = true;
    }

    if (taskType === TaskContainerTypes.MYDAY) {
      this.isMyDay = true;
    }

    if (taskType === TaskContainerTypes.ASSIGNED_TO_ME) {
      this.isAssignedToMe = true;
    }
  }

  static create(task: RawTask): Task {
    const _task = new Task(task.content);
    _task.id = task.id;
    _task.note = task.note;
    _task.steps = task.steps;
    _task.createdAt = task.createdAt;
    _task.updatedAt = task.updatedAt;
    _task._isComplete = task._isComplete;
    _task.reminderDate = task.reminderDate;
    _task._isImportant = task._isImportant;
    _task._isPlanned = task._isPlanned;
    _task._isMyDay = task._isMyDay;
    _task._isAssignedToMe = task._isAssignedToMe;

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

  set isMyDay(value: boolean) {
    this._isMyDay = value;
    this.updateUpdatedAt();
  }

  get isMyDay(): boolean {
    return this._isMyDay;
  }

  set isImportant(value: boolean) {
    this._isImportant = value;
    this.updateUpdatedAt();
  }

  get isImportant(): boolean {
    return this._isImportant;
  }

  set isPlanned(value: boolean) {
    this._isPlanned = value;
    this.updateUpdatedAt();
  }

  get isPlanned(): boolean {
    return this._isPlanned;
  }

  set isAssignedToMe(value: boolean) {
    this._isAssignedToMe = value;
    this.updateUpdatedAt();
  }

  get isAssignedToMe(): boolean {
    return this._isAssignedToMe;
  }
}
