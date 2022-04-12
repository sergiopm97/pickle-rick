import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from 'src/shared/components/header/header.module';
import { FooterModule } from 'src/shared/components/footer/footer.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, HttpClientModule, HeaderModule, FooterModule, NgxPaginationModule],
  exports: [CharactersComponent],
})
export class CharactersModule {}
