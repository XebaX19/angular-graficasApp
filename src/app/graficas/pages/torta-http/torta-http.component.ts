import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-torta-http',
  templateUrl: './torta-http.component.html',
  styles: [
  ]
})
export class TortaHttpComponent implements OnInit {
  existeData: boolean = false;

  public doughnutChartLabels: string[] = [ 
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      //{ data: [ 350, 450, 100, 200 ], backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB', '#00F7AD', '#00ED63'] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
  
  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    //Una forma de realizarlo utilizando el método getDataUsuariosRedesSociales()
    // this.graficasService.getDataUsuariosRedesSociales()
    //   .subscribe(data => {
    //     if (data) {
    //       this.existeData = true;
    //       const labels = Object.keys(data);
    //       const values = Object.values(data);

    //       this.doughnutChartData.labels = labels
    //       this.doughnutChartData.datasets.push({ data: values, backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB', '#00F7AD', '#00ED63'] });
    //     }
    //   });
    
    //Otra forma utilizando el método getDataUsuariosRedesSocialesModificada()
    this.graficasService.getDataUsuariosRedesSocialesModificada()
      .subscribe(data => {
        this.existeData = true;
        this.doughnutChartData.labels = data.labels;
        this.doughnutChartData.datasets.push({ data: data.values, backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB', '#00F7AD', '#00ED63'] });
      });
  }

}
