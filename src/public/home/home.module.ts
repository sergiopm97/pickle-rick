import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/shared/components/header/header.module';
import { WelcomeModule } from './welcome/welcome.module';
import { ExplanationModule } from './explanation/explanation.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    WelcomeModule,
    ExplanationModule,
    AboutModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
