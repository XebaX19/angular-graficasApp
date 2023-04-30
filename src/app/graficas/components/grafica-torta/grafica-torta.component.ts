import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-torta',
  templateUrl: './grafica-torta.component.html',
  styles: [
  ]
})
export class GraficaTortaComponent implements OnInit {

  @Input() doughnutChartLabels: string[] = [ 
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' 
  ];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
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

  constructor() { }

  ngOnInit(): void {
  }

}
