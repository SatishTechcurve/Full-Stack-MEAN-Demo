import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/data-services/local-storage.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  userDetails :any;
  selectedCompany:string;
  showCompany:boolean=false
  showCompanys:boolean =true
  constructor(
    private localStorage:LocalStorageService
  ) { 
    this.userDetails= localStorage.getLocalStorage('userDetails');
  }

  ngOnInit() {
  }
  selectCompany(company){
    console.log(company,'company')
      this.selectCompany= company;
      this.showCompany=true;
      this.showCompanys=false;
  }

}
