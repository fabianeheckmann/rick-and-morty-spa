import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from "./components/characters/characters.component";
import { EpisodesComponent } from "./components/episodes/episodes.component";
import { NgModule } from "@angular/core";


export const routes: Routes = [
  { path: 'characters', component: CharactersComponent},
  { path: 'episodes', component: EpisodesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }



