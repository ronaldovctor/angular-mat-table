import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {
  deptName!: string

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  save(): void{
    this.departmentService.addDepartment(
      {name: this.deptName}
    )
    this.clear()
  }

  clear(): void {
    this.deptName = ''
  }

}
