import { Routes } from '@angular/router';

import {LaboratorioComponent} from './pagina/laboratorio/laboratorio.component';
import { CasaComponent } from './pagina/casa/casa.component';
export const routes: Routes = [ 
   {
    path: '',
    component: CasaComponent
   },
   {
    path: 'laboratorio',
    component: LaboratorioComponent

   }
   
];
