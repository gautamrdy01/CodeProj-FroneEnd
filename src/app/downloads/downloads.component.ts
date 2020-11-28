import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
})
export class DownloadsComponent {
  downloads: any;
  view: any[] = [730, 450];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'No of downloads';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#27AE60', '#5DADE2'],
  };

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getDownloads();
  }
  getDownloads() {
    this.appService.getAppDownloads().subscribe((res) => {
      this.downloads = res;
    });
  }
}
