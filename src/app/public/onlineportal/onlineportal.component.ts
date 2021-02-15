import { Component, OnInit } from '@angular/core';
import  { PortfolioService } from './../../services/portfolio.service';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../models/user.model';
declare var particlesJS: any; 
@Component({
  selector: 'app-onlineportal',
  templateUrl: './onlineportal.component.html',
  styleUrls: ['./onlineportal.component.css']
})
export class OnlineportalComponent implements OnInit {
  url='';
  user= new User();
  constructor(
    private portfolioService:PortfolioService,
    private location:Location,
    private router:Router
  ) { 
    
    
  }

  ngOnInit(): void {
    particlesJS('particles-js', './../../../assets/particles.json',()=>{
      console.log('callback - particles.js config loaded');
    } );
      if (this.router.url != "" && this.url != this.router.url && this.router.url != '/404') {
        this.url = this.router.url
        this.getUserProfile();
      }else{
        this.router.navigate(['404']);
      }
    
  }

  getUserProfile():void{
    this.portfolioService.getUserProfile(this.url).subscribe((response)=>{
      if(response && response.success){
        this.user = response.user;
      }else{
        this.router.navigate(['404']); 
      }
    },(err)=>{
      this.router.navigate(['404']); 
    })
    
  }

}
