import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-hungryjerry',
  templateUrl: './hungryjerry.component.html',
  styleUrls: ['./hungryjerry.component.css'],
})
export class HungryjerryComponent implements OnInit {
  
  public rows = 0;
  public cols = 0;
  public grid = [];
  public stepsTakenByJerry:any = 0;
  public remainingCheese = 0;
  public currentPosition = [0, 0];
  public oldPosition = [0, 0];
  public enableTable = false;

  constructor() {}

  ngOnInit(): void {
    
  }

  public start(){
    
    if(this.rows < 2 || this.rows > 10){
      alert("Rows in Jerry's Burrow should be greater than 2 and less than 9")
      return;
    }
    if(this.cols < 2 || this.cols > 10 ){
      alert("Columns in Jerry's Burrow should be greater than 2 and less than 9")
      return;
    }
    this.enableTable = true;
    this.remainingCheese = this.rows
    let gridTable = document.getElementById("gridTable") as HTMLTableElement;
    gridTable.style.display = 'block';
    gridTable.style.margin = '10px';
    let disabledImages = ['🌚','🌝','🕳'];

    for(let i=0;i<this.rows;i++){
      let row = gridTable?.insertRow();
      row.style.padding = "20px"
      for(let j=0;j<this.cols;j++){
          let cell = row.insertCell();
          cell.style.padding = '20px';
          cell.style.border = '0.5px solid gray';
          cell.style.fontSize = '25px'
          cell.style.borderRadius = '1.5rem';

          cell.innerHTML=disabledImages[2];
          cell.id = 'col'+i+j;
      }

      let cheeseSpot = Math.floor(Math.random() * this.cols);
      let cheese = document.getElementById('col'+ i + cheeseSpot) as HTMLTableElement;
      cheese.innerText = '🧀'
  }

  let startPos = document.getElementById('col00') as HTMLTableElement;
  startPos.innerText = '🐭'
  }

  @HostListener('document:keyup', ['$event'])
  onKeyDown(event:KeyboardEvent) {
    
    if(this.remainingCheese > 0){
      this.oldPosition = [...this.currentPosition];
      switch(event.key){
          //Row Change
          case "ArrowDown":
              if(this.currentPosition[0] == (this.rows-1)){//at the bottom of the grid
                  alert("You can only move up from here.")
                  return;
              }
              this.currentPosition[0] += 1
              break;
          case "ArrowUp":
              if(this.currentPosition[0] == 0){//at the top of the grid
                  alert("You can only move down from here.")
                  return;
              }
              this.currentPosition[0] -= 1
              break;
          
          //Column change
          case "ArrowRight":
              if(this.currentPosition[1] == (this.cols-1)){//at the top of the grid
                  alert("You can only move left from here.")
                  return;
              }
              this.currentPosition[1] += 1
              break;
          case "ArrowLeft":
              if(this.currentPosition[1] == 0){//at the top of the grid
                  alert("You can only move right from here.")
                  return;
              }
              this.currentPosition[1] -= 1
              break;
  
          default:
              // alert("Use arrow keys (↑↓←→) to move jerry around the grid.")
              break;
          
      }
      this.stepsTakenByJerry+=1
      this.updateCurrentPositionView()
  }
  }


public updateCurrentPositionView(){
  
  let oldPositionCell = 'col'+ this.oldPosition[0] + this.oldPosition[1];
  let oldPosCellValue = document.getElementById(oldPositionCell) as HTMLTableElement;
  oldPosCellValue.innerText = '✅';
  let newPositionCell = 'col'+this.currentPosition[0]+this.currentPosition[1];
  let newPosCellValue = document.getElementById(newPositionCell) as HTMLTableElement;;
  let crrVal = newPosCellValue.innerText;
  newPosCellValue.innerText = '🐭';
  if(crrVal == '🧀'){
      this.remainingCheese-=1;
  }
  
  if(this.remainingCheese == 0){
    
    let bannerImg = document.getElementById("bannerImg") as HTMLImageElement;
    bannerImg.src = './../../../../assets/images/WellFedJer.png'
    
  }
}

public reset(){
  location.reload()
}

}
