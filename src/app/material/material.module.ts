import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
  ],
})
export class MaterialModule {}
