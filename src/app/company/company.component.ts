import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompanyService} from "../service/company.service";
import {Company} from "./company";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit  {
  flag: boolean = true;
  form: any = {
    address: null,
    tva: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  displayedColumns: string[] = ['address', 'tva'];
  dataSource: any;
  public companies?: Company[] | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  public getCompanies(): void {
    this.companyService.getCompanies().subscribe({
      next: data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
      error: err => {
        console.log(JSON.parse(err.error).message);
      }
    });
  }

  onSubmit() {
    return false;
  }
}
