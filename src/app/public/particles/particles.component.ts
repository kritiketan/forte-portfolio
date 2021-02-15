import { Component, OnInit } from '@angular/core';
declare var particlesJS: any; 
@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    debugger
    particlesJS('particles-js', './../../../assets/particles.json',()=>{
      
      console.log('callback - particles.js config loaded');
    } );
  }

}
