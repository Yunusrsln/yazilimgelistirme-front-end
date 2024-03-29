import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";
import { TodoComponent } from "./components/todo/todo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NaviComponent, CategoryComponent, ProductComponent, TodoComponent]
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Yunus Arslan';
  
}
