import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-typing-game',
  templateUrl: './typing-game.component.html',
  styleUrls: ['./typing-game.component.css'],
})
export class TypingGameComponent implements OnInit {
  exercises: any[] = [];
  newTextInput: string = '';
  gameStarted: boolean = false;
  currentSentence: string = '';
  userInput: string = '';
  correct: boolean = false;
  feedback: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getExercisesFromDatabase();
  }

  getExercisesFromDatabase() {
    this.http.get<any[]>('http://localhost:3000/exercises').subscribe(
      (response) => {
        this.exercises = response;
      },
      (error) => {
        console.error('Error al obtener los textos:', error);
        alert('Ha ocurrido un error al intentar obtener los textos.');
      }
    );
  }

  selectText(text: string) {
    this.currentSentence = text;
    this.gameStarted = true;
  }

  deleteText(exerciseId: string) {
    this.http.delete<any>(`http://localhost:3000/exercises/${exerciseId}`).subscribe(
      (response) => {
        console.log(response.message);
        alert('El texto ha sido eliminado exitosamente.');
        this.getExercisesFromDatabase(); // Actualizar la lista de textos después de eliminar uno
      },
      (error) => {
        console.error('Error al eliminar el texto:', error);
        alert('Ha ocurrido un error al intentar eliminar el texto.');
      }
    );
  }

  startGame() {
    if (!this.currentSentence && this.exercises.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.exercises.length);
      this.currentSentence = this.exercises[randomIndex].text;
      this.gameStarted = true;
    }
  }

  checkInput() {
    if (this.userInput.trim() === this.currentSentence) {
      this.correct = true;
      this.feedback = '¡Correcto! Presione Enter para continuar.';
    } else {
      this.correct = false;
      this.feedback = 'Incorrecto. Intente nuevamente.';
    }
  }

  saveNewText() {
    this.saveTextToDatabase(this.newTextInput);
  }

  saveTextToDatabase(text: string) {
    this.http.post<any>('http://localhost:3000/save-text', { text }).subscribe(
      (response) => {
        console.log(response.message);
        alert('El texto ha sido guardado exitosamente.');
        this.getExercisesFromDatabase(); // Actualizar la lista de textos después de guardar uno nuevo
      },
      (error) => {
        console.error('Error al guardar el texto:', error);
        alert('Ha ocurrido un error al intentar guardar el texto.');
      }
    );
  }

  getTextColor(expectedChar: string, actualChar: string): string {
    if (actualChar === '') {
      return '#ffffff'; // Si no se ha ingresado ningún carácter, el texto debe ser blanco
    } else {
      return expectedChar === actualChar ? '#28a745' : '#dc3545';
    }
  }
}
