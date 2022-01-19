import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rwi-search',
  templateUrl: './rwi-search.component.html',
  styleUrls: ['./rwi-search.component.scss']
})
export class RwiSearchComponent implements OnInit {

  constructor() { }

  maintext = "";
  isitfile = false;
  isitweb = false;
  isittext = false;
  filetype = "";
  website = "";
  thesearch = "";

  ngOnInit(): void { }

  public submit() {
    if (this.isittext){
      this.isitfile = false;
    }

    if (this.maintext && (this.isitfile == false) && (this.isitweb == false) && (this.isittext == false)) {
      this.thesearch = `${this.maintext}`;
    }
    else if(this.maintext && (this.isitfile == false) && (this.isitweb == false) && (this.isittext == true)){
      this.thesearch = `intext:${this.maintext}`;
    }
    else if (this.maintext && this.isitfile && this.filetype && (this.isitweb == false) && (this.isittext == false)) {
      this.thesearch = `${this.maintext} filetype:${this.filetype}`;
    }
    else if (this.maintext && (this.isitfile == false) && this.isitweb && this.website && (this.isittext == false)) {
      this.thesearch = `${this.maintext} site:${this.website}`;
    }
    else if (this.maintext && (this.isitfile == false) && this.isitweb && this.website && (this.isittext == true)) {
      this.thesearch = `intext:${this.maintext} site:${this.website}`;
    }
    else if (this.maintext && this.isitfile && this.filetype && this.isitweb && this.website) {
      this.thesearch = `${this.maintext} filetype:${this.filetype} site:${this.website}`;
    }





    /*  if (!this.maintext) {
        alert("Please Enter the name");
      }
      else if (this.maintext && (this.isitfile == true) && !this.filetype) {
        alert("Please Enter the file type!");
      }
      else if (this.maintext && (this.isitfile == false)) {
        this.thesearch = `${this.maintext}`;
      }
      else if (this.maintext && this.isitfile && this.filetype) {
        this.thesearch = `${this.maintext} filetype:${this.filetype}`;
      }*/
  }
}
