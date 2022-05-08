import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { HeaderModule } from 'src/shared/components/header/header.module';

@NgModule({
  declarations: [CharacterComponent],
  imports: [CommonModule, HeaderModule],
})
export class CharacterModule {}
