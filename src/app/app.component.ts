import { Component } from '@angular/core';
import {DataFrame, IDataFrame} from "data-forge";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataframe: IDataFrame = new DataFrame()
  title = 'plotlyHeatmap';

  handleFileData(e: IDataFrame) {
    this.dataframe = e
  }
}
