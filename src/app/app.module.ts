import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// We load the angular animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// We load the material Module
import { MaterialModule } from './material';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { TableModule } from 'src/app/modules/table/table.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
