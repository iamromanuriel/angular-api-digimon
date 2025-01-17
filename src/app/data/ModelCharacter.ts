export interface Character{
  name: string;
  img: string;
  level: string;
}

export interface ApiResponse<T>{
  body: T[]
}
