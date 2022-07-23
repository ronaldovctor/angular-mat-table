import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/services/department.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  name!: string
  department!: Department | null
  price!: number
  description!: string
  departments?: Department[]

  constructor(private productService: ProductService, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments()
  }

  save(): void{
    this.productService.addProduct(
      {
        name: this.name,
        price: this.price,
        description: this.description,
        department: this.department!
      }
    )
    this.clear()
  }

  clear(): void {
    this.name = ''
    this.price = 0
    this.description = ''
    this.department = null
  }
}
