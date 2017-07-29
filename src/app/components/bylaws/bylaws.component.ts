import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bylaws',
  templateUrl: './bylaws.component.html',
  styleUrls: ['./bylaws.component.css']
})
export class BylawsComponent implements OnInit {

  public pdfSrc: string = '/assets/vb.bylaws.pdf';

  constructor() { }

  ngOnInit() {
  }

}
