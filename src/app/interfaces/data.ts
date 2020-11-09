export interface Data {
  data: object;
  getListing(): object[];
  getTitle(): string;
}

export interface Listing {
  title: string;
  list: object[];
}
