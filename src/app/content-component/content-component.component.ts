import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-content-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './content-component.component.html',
  styleUrl: './content-component.component.css',
})
export class ContentComponentComponent {
  products: any;
  HttpClient = inject(HttpClient);
  ngOnInit(): void{
    this.getProduct()
  }
  getProduct() {
    this.HttpClient.get('https://dummyjson.com/products')
      .subscribe((res: any) => {
        console.log(res)
        this.products = res.products
      })
   }
}
