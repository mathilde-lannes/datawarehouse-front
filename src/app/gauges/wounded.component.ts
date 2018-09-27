import { Component, OnInit } from '@angular/core';
import { AccidentsService } from '../services/accidents.service';

@Component({
  selector: 'app-wounded',
  templateUrl: './gauge.component.html'
})
export class WoundedComponent implements OnInit {
    value = 0;
    total = 0;
    color = '#81ad8a';
    label = 'blessés';

  constructor(private accidentsService: AccidentsService) {  }

  ngOnInit() {
    this.accidentsService.getWounded()
      .subscribe(({wounded, total_accidents}) => {
        this.value = wounded;
        this.total = total_accidents;
      });
    }

}
