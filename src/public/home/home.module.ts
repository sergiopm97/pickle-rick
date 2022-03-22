import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/shared/components/header/header.module';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HeaderModule, WelcomeModule],
  exports: [HomeComponent],
})
export class HomeModule {}
