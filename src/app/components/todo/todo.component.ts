import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  
  todos:Todo[]=[];

  constructor(private todoService:TodoService){}  
  
  ngOnInit(): void {
   this.getTodos();
  }
  getTodos(){
  this.todoService.getTodos().subscribe(response=>{
    this.todos = response
  })
  }

}
