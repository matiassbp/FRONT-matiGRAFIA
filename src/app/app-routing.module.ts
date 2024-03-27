import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypingGameComponent } from './components/typing-game/typing-game.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'typing-game', component: TypingGameComponent },
  { path: '', component: HomeComponent }, // Define la ruta para TypingGameComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
