import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./modules/estudiantes/estudiantes-routing.module').then((m) => m.EstudiantesRoutingModule),
  },
  {
    path: 'profesores',
    loadChildren: () => import('./modules/profesores/profesores-routing.module').then((m) => m.ProfesoresRoutingModule),
  },
  {
    path: '**', //PAG NO ENCONTRADA
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
