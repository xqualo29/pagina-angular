import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { AgendarcitaComponent } from './pages/agendarcita/agendarcita.component';
import { PuntosComponent } from './pages/puntos/puntos.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { ModeloComponent } from './pages/modelo/modelo.component';
import { CedroComponent } from './pages/cedro/cedro.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'home', component: PrincipalComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item', component: ItemComponent},
  {path: 'agendarcita', component: AgendarcitaComponent},
  {path: 'puntos', component: PuntosComponent},
  {path: 'credito', component: CreditoComponent},
  {path: 'desarrollo', component: DesarrolloComponent},
  {path: 'modelo', component: ModeloComponent},
  {path: 'cedro', component: CedroComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

