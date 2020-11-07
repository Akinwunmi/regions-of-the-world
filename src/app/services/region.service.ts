import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
// interfaces
import { ICountry } from "../interfaces/regions";

@Injectable({
  providedIn: "root",
})
export class RegionService {
  private countryUrl = "assets/data/continents/europe.json";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.countryUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
