import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserInterface } from '../userstable/userInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @Output() yeniClick: EventEmitter<void> = new EventEmitter<void>();
  users:UserInterface[] =[];

ngOnInit(): void {
    
}
// column = [
//   { header: 'Firma', field: 'FirstName', type: "text",  filtreIcon:"fa-solid fa-text-height"},
//   { header: 'Plaka', field: 'LastName', type: "text",filtreIcon:"fa-solid fa-text-height" },
//   { header: 'Tip', field: 'Email', type: "text" ,},
//   { header: 'Nakliye', field: 'Telephone', type: "text", },
//   { header: 'Kendi Aracımız', field: 'Address', type: "text", },
//   // { header: 'Yakıt Tipi', field: '', type: "button", click: this.detail.bind(this), icon: "fas fa-pencil" , btnClass:"btnpencil"},
//   // { header: 'Tts No', field: '', type: "button", click: this.silDialog.bind(this), icon: "fas fa-trash " ,btnClass:"btntrash", }

// ];
detail(data: any) {
  // your implementation
}

}
