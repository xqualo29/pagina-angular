import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AgendarcitaComponent } from './pages/agendarcita/agendarcita.component';
import { PuntosComponent } from './pages/puntos/puntos.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { ModeloComponent } from './pages/modelo/modelo.component';
import { CedroComponent } from './pages/cedro/cedro.component';
import { CeibaComponent } from './pages/ceiba/ceiba.component';
import { NogalComponent } from './pages/nogal/nogal.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'home', component: PrincipalComponent},
  {path: 'agendarcita', component: AgendarcitaComponent},
  {path: 'puntos', component: PuntosComponent},
  {path: 'credito', component: CreditoComponent},
  {path: 'desarrollo', component: DesarrolloComponent},
  {path: 'modelo', component: ModeloComponent},
  {path: 'cedro', component: CedroComponent},
  {path: 'ceiba', component: CeibaComponent},
  {path: 'nogal', component: NogalComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

