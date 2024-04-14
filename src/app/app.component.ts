import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule ,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
  adr="pune";
  status="true";
stdt=["madhuri","tejas","piya","jiya","neha"];
emp=[
{
nm:"teja",
cr:"c",
mobileno:"7788665544"
},
{
  nm:"tejaswini",
  cr:"java",
mobileno:"8830027467"

}



];
cafemenu=[
{
nm:"veg grilled sandwitch",
pr:50,
category:"sandwi"

},
{
  nm:"veg sandwitch",
  pr:100,
  category:"sandwi"
  
  },
  {
    nm:"veg grilled burger",
    pr:60,
    category:"burger"
    
    },
    {
      nm:"veg burger",
      pr:500,
      category:"burger"
      
      },
      {
        nm:"veg cheese pizza",
        pr:50,
        category:"pizza"
        
        },
        {
          nm:"veg corn pizza",
          pr:50,
          category:"pizza"
          
          }
        

];



}









