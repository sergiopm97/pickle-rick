import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplanationComponent } from './explanation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [ExplanationComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ExplanationComponent],
})
export class ExplanationModule {}
