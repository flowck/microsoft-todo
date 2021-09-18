export interface List {
  name: string;
  label: string;
  items: number;
}

export interface Group {
  name: string;
  label: string;
  lists: List[];
}
