import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-search',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule
  ],
  templateUrl: './employee-search.component.html',
  styleUrl: './employee-search.component.css'
})
export class EmployeeSearchComponent {
  searchInput: string = '';
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  inputError: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  validateInput() {
    this.inputError = !/^\d*$/.test(this.searchInput);
  }

  getEmployees() {
    if (this.searchInput === '') {
      this.employeeService.getAllEmployees().subscribe({
        next: (data: Employee[]) => {
          this.employees = data;
          this.filteredEmployees = this.employees;
        },
        error: error => {
          console.error('Error fetching employees:', error);
        }
      });
    } else if (!this.inputError) {
      this.employeeService.getEmployeeById(this.searchInput).subscribe({
        next: (data: Employee) => {
          this.employees = [data];
          this.filteredEmployees = this.employees;
        },
        error: error => {
          console.error('Error fetching employee:', error);
        }
      });
    }
  }

  searchEmployees() {
    if (!this.inputError) {
      this.getEmployees();
    }
  }
}

