import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-page-visits',
  templateUrl: './page-visits.component.html',
  styleUrls: ['./page-visits.component.scss'],
})
export class PageVisitsComponent {
  multi: any;
  view: any[] = [730, 450];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Users Signed In';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#27AE60', '#D35400'],
  };

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.getPageVisits();
  }
  getPageVisits() {
    this.appService.getPageVisits().subscribe((res) => {
      this.multi = res;
    });
  }
}
