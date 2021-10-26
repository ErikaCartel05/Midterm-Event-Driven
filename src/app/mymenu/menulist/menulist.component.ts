import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  title = 'home';
   title1 = 'Profile';
   title2 = 'Gallary';
   title3 = 'Contact';
   email = 'erikajoy.cartel@evsu.edu.ph';
   number= '09277458392';
   msgemail = 'Hi you can email me at ';
   msgnumber = 'Hi you can reach me at ';
   msgevsu = 'Hi! Im currently school in Evsu Main campus';
   msgweb = 'Hi Im webdeveloper I know how to design the frontend and also to manipulate the backend.'
   msgprog = 'Im a programmer I have defferent language that I know which are PHP,C++,C#. ';
   image = new Array(11)
  constructor() { }

  ngOnInit(): void {
  }

}
