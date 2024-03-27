import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypingGameComponent } from './components/typing-game/typing-game.component';

const routes: Routes = [
  { path: 'typing-game', component: TypingGameComponent }, // Define la ruta para TypingGameComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
