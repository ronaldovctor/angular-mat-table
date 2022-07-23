import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataFromServer: any[] = [
    {id: 1, name: 'Laptop', department_id: 4, price: 40, description: 'Laptop description'},
    {id: 2, name: 'Shirt', department_id: 1, price: 10, description: 'Shirt description'},
    {id: 3, name: 'Polo', department_id: 1, price: 50, description: 'Polo description'},
    {id: 4, name: 'Mouse', department_id: 3, price: 40, description: 'Mouse description'}
  ]

  products: Product[] = []
  private netxtId!: number
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>()

  constructor(private departmentService: DepartmentService) { 
    this.dataFromServer.forEach((value) => {
      this.products.push({
        id: value.id,
        name: value.name,
        description: value.description,
        price: value.price,
        department: this.departmentService.getDepartmentById(value.department_id)
      })
      this.netxtId = ++value.id
    })
  }

  getProducts(): Product[]{
    return this.products!
  }

  addProduct(prod: Product): void {
    let p = {id: this.netxtId++, ...prod}
    this.products.push(p)
    console.log(this.products)
    this.onNewProduct.emit(p)
  }
}
