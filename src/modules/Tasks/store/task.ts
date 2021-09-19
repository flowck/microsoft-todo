export class Task {
  isComplete!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  listId!: string | null;

  constructor(public content: string, listId = null) {
    this.isComplete = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.listId = listId;
  }
}
