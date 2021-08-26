import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  getExampleInput() {
    return this.http.get("assets/all.correlationmatrix.proteinGroups.csv", {observe: "response", responseType: "text"})
  }

}
