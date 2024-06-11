import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
   "crear "
  ];
  name = "sergio";
  age = "17 ";
  disabled=true;

}
