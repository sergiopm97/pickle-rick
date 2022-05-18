import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { HeaderModule } from 'src/shared/components/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, HeaderModule, ReactiveFormsModule, HttpClientModule],
  exports: [CreateComponent],
})
export class CreateModule {}
