import { Component , OnInit } from '@angular/core';
import { ISRODATAService } from '../isro-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-isro',
  templateUrl: './isro.component.html',
  styleUrls: ['./isro.component.css']
})
export class ISROComponent implements OnInit {

  ISRO : any;

  constructor(private service : ISRODATAService)
  {}
 
  ngOnInit() {
    
    this.ISRO = this.service.getISRO_Data().subscribe(
      data => {this.ISRO = data.spacecrafts}
    );
  }
    



}
