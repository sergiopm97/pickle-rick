import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from 'src/public/characters/character/character.component';
import { CharactersComponent } from 'src/public/characters/characters.component';
import { CreateComponent } from 'src/public/create/create.component';
import { HomeComponent } from 'src/public/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
