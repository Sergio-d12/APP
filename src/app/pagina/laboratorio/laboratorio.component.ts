import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-laboratorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laboratorio.component.html',
  styleUrl: './laboratorio.component.css'
})
export class LaboratorioComponent {
  welcome = 'hola';
  tasks = [
   "instalar clic",
   "crear pagina",
   "crear componentes",
   "crear serv"
  ];
  name = "sergio";
  age = "17 ";
  disabled=true;

}
