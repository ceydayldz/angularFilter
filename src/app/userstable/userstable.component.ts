import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { UserInterface } from './userInterface';
import { UsersService } from '../users.service';
import { SortingInterface } from './sortingInterface';
import { FormBuilder } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.scss']
})
export class UserstableComponent implements OnInit{
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });


  @Input() columns: Array<keyof UserInterface> = [
      'id', 'name', 'age'
  ];





    
  searchValue: string = '';
  users: UserInterface[] = [];
  @Input() tableData: any[] = [];
  // @Input() columns: SortingInterface[] = [];
  // @Input() columns: string[] = [];



  @Input() isYeni:boolean = false;


  sorting: SortingInterface ={
    column:'id',
    order: 'asc'
  }

  private searchValueChanged = new Subject<string>();

  constructor(private usersService: UsersService, private fb:FormBuilder,private elRef: ElementRef) {} 

  ngOnInit(): void {
    this.searchValueChanged
    .pipe(
      debounceTime(300), 
      distinctUntilChanged(), 
      switchMap(searchValue => this.usersService.getUsers(this.sorting, searchValue))
    )
    .subscribe(users => {
      this.users = users;
    });
    this.fetchData();

  }
  @HostListener('document:click', ['$event'])
  

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
 
  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  isDescSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'desc';
  }

  isAscSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'asc';
  }
  sortTable(column:string):void{
    const futureSortingOrder = this.isDescSorting(column) ? 'asc' : 'desc' ;
    this.sorting ={
      column,
      order: futureSortingOrder,
    };
    this.fetchData();
  }
  fetchData(): void {
    this.usersService.getUsers(this.sorting, this.searchValue).subscribe((users) => {
      this.users = users;
    });
  }
  // yeni() {
  //   this.yeniClick.emit();
  // }
  
}
