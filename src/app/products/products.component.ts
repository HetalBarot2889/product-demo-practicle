import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ProductService } from '../service/product.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selected: any[] = [];
  public data: any[] = [];
  allRowsSelected: boolean = false;
  products: any[] = [];

  constructor(private prodService: ProductService, private http: HttpClient,) { }

  ngOnInit(): void {
    this.getAllData();
  }

  setSelected() {
    this.data = _.cloneDeep(this.products)
    //console.log(this.data)
    this.selected = this.data.filter((el: any) => el['selected'] = true)
    console.log(this.selected);

  }

  getAllData() {
    const prodAll = this.prodService.getAll().toPromise().then((res: HttpResponse<any>) => {
      if (res.status === 200) {
        this.products = _.cloneDeep(res.body?.['data']);
        console.log(this.products);
      }
    })

  }
  onSave() {
    const data = _.cloneDeep(this.selected);

  }
}
