import { Component, OnInit } from '@angular/core';
import  { PortfolioService } from './../../services/portfolio.service';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-onlineportal',
  templateUrl: './onlineportal.component.html',
  styleUrls: ['./onlineportal.component.css']
})
export class OnlineportalComponent implements OnInit {
  url='';
  constructor(
    private portfolioService:PortfolioService,
    private location:Location,
    private router:Router
  ) { 
    
    
  }

  ngOnInit(): void {
      if (this.router.url != "" && this.url != this.router.url && this.router.url != '/404') {
        this.url = this.router.url
        this.getUserProfile();
      }else{
        this.router.navigate(['404']);
      }
    
  }

  getUserProfile():void{
    this.portfolioService.getUserProfile(this.url).subscribe((response)=>{
      console.log('Creepy',response);
    })
    this.router.navigate(['404']);
  }

}
