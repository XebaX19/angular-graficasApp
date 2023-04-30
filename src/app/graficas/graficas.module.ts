import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { TortaComponent } from './pages/torta/torta.component';
import { TortaHttpComponent } from './pages/torta-http/torta-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { GraficaTortaComponent } from './components/grafica-torta/grafica-torta.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    TortaComponent,
    TortaHttpComponent,
    GraficaBarraComponent,
    GraficaTortaComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    GraficasRoutingModule
  ]
})
export class GraficasModule { }
