import { Component } from '@angular/core';
import { RiliProxyService } from '../rili-proxy.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name'];

  constructor(private router: Router, proxy$: RiliProxyService) {
    proxy$.getEvents().subscribe( (result: any[]) => 
    {
      this.dataSource = new MatTableDataSource<any>(result);
      console.log("retrieved data from server.");
      console.log(this.dataSource.filteredData);
    });
  }
}
