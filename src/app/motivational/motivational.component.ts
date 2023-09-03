import { Component , OnInit } from '@angular/core';
import { MotivationalQuotesService } from '../motivational-quotes.service';

@Component({
  selector: 'app-motivational',
  templateUrl: './motivational.component.html',
  styleUrls: ['./motivational.component.css']
})
export class MotivationalComponent implements OnInit {

   
    quote : any ;

    constructor( private service : MotivationalQuotesService){}

    ngOnInit(): void {
      
      this.service.getQuotes().subscribe(
        (data) => {
             
              const randomNumber = Math.floor(Math.random() * 15) ;
              this.quote = data[randomNumber].text;
        }
      )

    }

}
