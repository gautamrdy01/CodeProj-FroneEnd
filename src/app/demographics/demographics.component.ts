import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss'],
})
export class DemographicsComponent {
  demographics: any;
  view: any[] = [720, 450];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#943126', '#6C3483', '#34495E', '#239B56', '#F1C40F', '#2874A6'],
  };

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.getDemographics();
  }
  getDemographics() {
    this.appService
      .getDemographics()
      .subscribe((res) => (this.demographics = res));
  }
}
