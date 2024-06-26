import { Component, Input } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AllJob } from '../../models/allJobs.interface';

@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.scss',
})
export class AllJobsComponent {
  // data from home componant
  @Input() data!: AllJob[];
  chartOptions!: any;
  ngOnInit() {
    if (this.data) {
      // options of chart
      this.chartOptions = {
        title: {
          text: `100 % `,
          verticalAlign: 'center',
          dockInsidePlotArea: true,
          fontSize: 30,
          cornerRadius: 60,
          fontWeight: 'bold',
        },
        animationEnabled: true,
        height: 140,
        backgroundColor: '#F8F9FA',
        showInLegend: true,
        data: [
          {
            type: 'doughnut',
            legendMarkerType: 'square',
            showInLegend: true,
            dataPoints: this.data,
          },
        ],
        centerLabelFontColor: '#333',
        centerLabelFontSize: 24,
        legend: {
          maxWidth: 400,
          itemWidth: 150,
          verticalAlign: 'center',
          horizontalAlign: 'right',
          cursor: 'pointer',
          fontSize: 16,
          fontFamily: 'Roboto',
          markerMargin: 8,
        },
      };
    }
  }
}
