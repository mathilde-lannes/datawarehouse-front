import { Component, OnInit } from '@angular/core';
import { AccidentsService } from '../services/accidents.service';

@Component({
  selector: 'app-mortal',
  templateUrl: './gauge.component.html'
})
export class MortalComponent implements OnInit {
    value = 0;
    total = 0;
    color = '#ad81a4';
    label = 'accidents mortels';

  constructor(private accidentsService: AccidentsService) {  }

  ngOnInit() {
    this.accidentsService.getMortalAccidents()
      .subscribe(({mortal_accidents, total_accidents}) => {
          this.value = mortal_accidents;
          this.total = total_accidents;
      });
  }

}
