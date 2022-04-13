import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from 'src/shared/components/header/header.module';
import { FooterModule } from 'src/shared/components/footer/footer.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharactersComponent, FilterPipe],
  imports: [CommonModule, HttpClientModule, HeaderModule, FooterModule, NgxPaginationModule, FormsModule],
  exports: [CharactersComponent],
})
export class CharactersModule {}
