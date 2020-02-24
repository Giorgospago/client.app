import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/ICategory';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
})
export class CategoryProductsComponent implements OnInit {

  public category: ICategory = null;
  public products: IProduct[] = [];
  public imageBase: string = "http://localhost:3000/uploads/";

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.api.getProductsByCategory(params.categoryId)
        .subscribe(response => {
          if (response.success) {
            this.category = response.category;
            this.products = response.products;
          }
        });
    });
  
  }

}
