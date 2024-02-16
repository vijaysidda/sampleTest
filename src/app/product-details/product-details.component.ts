import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  productDetails:any;
  productData: any;

  constructor(private api:ApiService,private router:ActivatedRoute) {}
  
  ngOnInit() {
    this.productDetails = this.router.snapshot.paramMap.get('productId')
    this.getProducts()
  }

  getProducts() {
    this.api.getProductId( this.productDetails).subscribe(data => {
      this.productData = data;
    })
  }


}
