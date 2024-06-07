import { CommonModule } from '@angular/common';
import { Component, ɵPendingTasks } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title= "todo-APP"
 welcome = 'hola';
 tasks = [
  "instalar angular clic",
  "crear pagina",
  "crear componentes",
  "crear servicio",
 ];
} 






