import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  @ViewChild(MatTable) dataTable!: MatTable<any>

  products: Product[] = []
  prodColumns: string[] = ['code', 'name', 'price', 'dept', 'description']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.productService.onNewProduct.subscribe(() => this.dataTable.renderRows())
  }

}
