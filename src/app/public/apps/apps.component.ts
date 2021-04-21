import { Component, OnInit } from '@angular/core';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})

export class AppsComponent implements OnInit {
  // public listItem:ListItem;
  public inputList=[]
  constructor() { }

  ngOnInit(): void {
    // this.inputList.push(this.listItem)
  }

}
