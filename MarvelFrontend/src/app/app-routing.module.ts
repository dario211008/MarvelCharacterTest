import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelCharactersComponent } from './modules/marvel-characters/marvel-characters.component';

const routes: Routes = [
  { path: '\**', component: MarvelCharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
