import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
@Component({
  selector: 'app-halfdesign',
  templateUrl: './halfdesign.component.html',
  styleUrls: ['./halfdesign.component.css']
})
export class HalfdesignComponent implements OnInit {
  public frameUrl:SafeUrl='';
  public socials = [
    {
      "name":"Linkedin",
      "url":"https://www.linkedin.com/in/kritiketan-sharma-2133b5a8/",
      "openStyle":"newself"
    },
    {
      "name":"Medium",
      "url":"https://kritiketan.medium.com",
      "openStyle":"newself"
    },
    {
      "name":"Whatsapp",
      "url":"https://wa.link/tj8ukb",
      "openStyle":"none"
    },
    {
      "name":"Resume",
      "url":"./../../../assets/Kritiketan Sharma Resume.pdf",
      "openStyle":"download"
    }
  ]
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.generateLinkElements()
  }
  generateLinkElements(){
      
      for(let soc of this.socials){
        let liTag = document.createElement('li');
        let aTag = document.createElement('a')
        aTag.href = soc.url;
        liTag.appendChild(aTag)
        // document.getElementById('linksList')?.appendChild(liTag);
        // linksContainers.appendChild(aTag)
      }
  }

  

}
