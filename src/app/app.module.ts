import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageVisitsComponent } from './page-visits/page-visits.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { DownloadsComponent } from './downloads/downloads.component';

@NgModule({
  declarations: [
    AppComponent,
    PageVisitsComponent,
    UsersComponent,
    DemographicsComponent,
    DownloadsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
