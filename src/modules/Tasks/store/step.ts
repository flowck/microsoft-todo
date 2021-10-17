export class Step {
  createdAt!: Date;
  isComplete!: boolean;

  constructor(public content: string) {
    this.isComplete = false;
  }
}
