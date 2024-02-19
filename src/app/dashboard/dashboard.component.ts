import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productDetails:any = [];
  emailValue:string | null;

  query = {
    _start:0,
    _limit:6
  }

  is_api_loading:boolean = false;
  is_reached_max:boolean = false;

  constructor(private api:ApiService,private router:ActivatedRoute,
    private route:Router) {
    this.emailValue = this.router.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.is_api_loading = true;
    this.api.getData(this.query).subscribe(data => {
      this.is_api_loading = false;
      if(!data.length) this.is_reached_max = true;
      this.productDetails = [...this.productDetails,...data];
      this.query._start += 12;
    })
  }



}
