import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/listItem.model';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})

export class AppsComponent implements OnInit {
  public listItems= [{data:''}];
  public showList = false;
  public cart = [''];
  constructor() { }

  ngOnInit(): void {}

  addListItem(){
    this.listItems.push({data:''})
  }

  deleteItem(index:Number){
    console.log(index);
  }

  addToCard(item:any){
    this.cart.push("1 X "+item);
  }

}
