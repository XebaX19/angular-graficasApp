import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { TortaComponent } from './pages/torta/torta.component';
import { TortaHttpComponent } from './pages/torta-http/torta-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barra', component: BarrasComponent },
      { path: 'barra-doble', component: BarrasDobleComponent },
      { path: 'torta', component: TortaComponent },
      { path: 'torta-http', component: TortaHttpComponent },
      { path: '**', redirectTo: 'barra' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
