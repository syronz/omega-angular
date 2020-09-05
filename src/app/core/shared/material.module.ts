import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

const modules = [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
];


@NgModule({
  exports: [
    ...modules
  ],
})

export class MaterialModule {}
