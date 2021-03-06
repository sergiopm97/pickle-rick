import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/shared/components/header/header.module';
import { WelcomeModule } from './welcome/welcome.module';
import { ExplanationModule } from './explanation/explanation.module';
import { AboutModule } from './about/about.module';
import { FooterModule } from 'src/shared/components/footer/footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    WelcomeModule,
    ExplanationModule,
    AboutModule,
    FooterModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
