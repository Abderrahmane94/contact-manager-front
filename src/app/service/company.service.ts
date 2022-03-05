import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../company/company";
import {environment} from "../../environments/environment";

const apiServerUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) { }

  public getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(apiServerUrl+'company/all');
  }

  public addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(apiServerUrl+'company/add',company);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(apiServerUrl+'company/update',company);
  }

  public deleteCompany(companyUUID: number): Observable<void> {
    return this.http.delete<void>(apiServerUrl+'company/delete/${companyUUID}');
  }
}
