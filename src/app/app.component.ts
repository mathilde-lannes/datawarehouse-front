import { Component, OnInit } from '@angular/core';
import { DataSet, Graph2d, Graph2dOptions } from 'vis';
import { AccidentsService } from './services/accidents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  graph2d: Graph2d;

  constructor(private accidentsService: AccidentsService) {  }

  ngOnInit() {
    /* this.displayRandomChart();
    this.accidentsService.getTravels()
      .subscribe(_ => this.displayAccidentsByTravels(_)); */
  }

  displayAccidentsByTravels(items: any) {
    const visContainer: HTMLElement = document.getElementById('visContainer');
    const dataset = new DataSet(items);
    const options: Graph2dOptions = {
        style: 'bar',
        barChart: {width: 50, align: 'center'}
    };

    const mocks: any = [
      {x: '2014-06-11', y: 10},
      {x: '2014-06-12', y: 25},
      {x: '2014-06-13', y: 30},
      {x: '2014-06-14', y: 10},
      {x: '2014-06-15', y: 15},
      {x: '2014-06-16', y: 30}
    ];

    this.graph2d = new Graph2d(visContainer, mocks, options);
  }

  displayRandomChart() {
    const items: any = [
      {x: '2014-06-11', y: 10},
      {x: '2014-06-12', y: 25},
      {x: '2014-06-13', y: 30},
      {x: '2014-06-14', y: 10},
      {x: '2014-06-15', y: 15},
      {x: '2014-06-16', y: 30}
    ];
    const options = {
      start: '2014-06-10',
      end: '2014-06-18'
    };

  }
}
