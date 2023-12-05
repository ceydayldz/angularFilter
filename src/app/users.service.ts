import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from './userstable/userInterface';
import { HttpClient } from '@angular/common/http';
import { SortingInterface } from './userstable/sortingInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}
  
  getUsers(sorting: SortingInterface,    searchValue: string
    ): Observable<UserInterface[]> {
      const url = `http://localhost:3000/users?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
      console.log('Sending request to:', url);

      return this.http.get<UserInterface[]>(url);
  }

}
