import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css'],
})
export class AreachartComponent implements OnInit {
  ngOnInit() {
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'area',
        height: 300,
        width: '100%',
        background: '#0c0c0c',
        toolbar: {
          show: false, // Set to false to hide the toolbar
        },
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Stocks',
          data: [15, 50, 40, 90, 30, 65],
          color: '#8139ec',
          
        },
        
      ],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#8139ec'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.001,
          stops: [0, 85],
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          style: {
            colors: ['#e0dcdc','#e0dcdc','#e0dcdc','#e0dcdc','#e0dcdc','#e0dcdc'], // Set the colors of individual labels
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#e0dcdc',
          },
        },
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    };

    const chart = new ApexCharts(document.getElementById('chart'), options);
    chart.render();
  }
}
