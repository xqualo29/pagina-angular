import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PuntosComponent } from './pages/puntos/puntos.component';
import { AgendarcitaComponent } from './pages/agendarcita/agendarcita.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { ModeloComponent } from './pages/modelo/modelo.component';
import { CedroComponent } from './pages/cedro/cedro.component';
import { CeibaComponent } from './pages/ceiba/ceiba.component';
import { NogalComponent } from './pages/nogal/nogal.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    PuntosComponent,
    AgendarcitaComponent,
    CreditoComponent,
    DesarrolloComponent,
    ModeloComponent,
    CedroComponent,
    CeibaComponent,
    NogalComponent,
    UbicacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
