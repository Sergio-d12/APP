import { Routes } from '@angular/router';

import {CasaComponent} from './pagina/casa/casa.component';
import {LaboratorioComponent} from './pagina/laboratorio/laboratorio.component';
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
