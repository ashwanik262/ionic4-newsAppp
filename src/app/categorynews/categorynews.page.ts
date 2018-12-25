import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorynews',
  templateUrl: './categorynews.page.html',
  styleUrls: ['./categorynews.page.scss'],
})
export class CategorynewsPage implements OnInit {
  public data:any;
  public title:any;

  constructor(private newsService:NewsService,private router:Router) { }

  ngOnInit() {
    this.title=this.newsService.category;
    this.getData();
  }

  getData(){
    this.newsService.getNewsByCategory(this.newsService.category).subscribe(data=>{
      console.log("data",data);
      this.data=data;
    })
  }

  details(item){
    console.log("item is ",item);
    this.newsService.currentAtricle=item;
    this.router.navigate(['/newsdetail'])
  }

}
