import {
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableDataSource,
    MatPaginator,
    MatSort
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ]
})
export class MaterialModule {}

