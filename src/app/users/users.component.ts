import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  screens: any;
  view: any[] = [720, 450];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#B03A2E', '#138D75', '#3498DB', '#633974'],
  };

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.getScreens();
  }
  getScreens() {
    this.appService.getScreens().subscribe((res) => (this.screens = res));
  }
}
