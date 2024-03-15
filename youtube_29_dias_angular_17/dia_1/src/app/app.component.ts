import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsService} from "./api/products.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly productsService = inject(ProductsService);
  products$ = this.productsService.getAllProducts();
}
