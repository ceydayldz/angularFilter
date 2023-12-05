export interface UserInterface {
    age: number;
    placeholder ?:string;
    control ?:string;
    id ?: number;
    name?: string;
    className?: string; 
    header:string,
    field:string,
     type?:string,
    icon?:string,
    filtreIcon?:string,
    sort?: 'asc' | 'desc';
    email?:string;
    btnClass?:string;
    inpClass?:string;
    click?:(e?:any) => void;
    [key: string]: any;

  }