import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  categoryArray: string[] = ['Business', 'Blog', 'Portfolio', 'Travel', 'Photography', 'Personal'];

  constructor() { }

  ngOnInit() {
  }

}
