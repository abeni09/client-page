export interface HeaderItem {
  target: "_self" | "_blank";
  url: string;
  title: string;
  order: number;
}
export interface newsDetail{
  target: "_self" | "_blank";
  id:number;
  url: string;
  title: string;
  createdDate:string;
  description:string;
}
export interface Footer {
  text: string;
}
