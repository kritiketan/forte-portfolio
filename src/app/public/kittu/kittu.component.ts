import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kittu',
  templateUrl: './kittu.component.html',
  styleUrls: ['./kittu.component.css']
})
export class KittuComponent implements OnInit {

  public education=[
    {
      institution:"Deakin Unioversity"
    }
  ]
  public work=[]

  constructor() { }

  ngOnInit(): void {
  }

}
