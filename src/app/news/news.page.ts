import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private data:any;
  public isTopHeadline:boolean=false;
  public isCategory:boolean=false;

  constructor(private newsService:NewsService,private router:Router) { 
    this.isTopHeadline=true

  }

  ngOnInit() {
    this.getData();
    
  }

  getData(){
    this.newsService.getData().subscribe(data=>{
      console.log("data",data);
      this.data=data;
    })
  }

  details(item){
    console.log("item is ",item);
    this.newsService.currentAtricle=item;
    this.router.navigate(['/newsdetail'])

  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    if(ev.detail.value == "topHeadlines"){
      this.isTopHeadline=true;
      // this.getData();
      this.isCategory=false;


    }
    if(ev.detail.value == "Category"){
      this.isTopHeadline=false;
      this.isCategory=true;

    }
  }

  category(category:any){
    console.log("item is ",category);
    this.newsService.category=category;
    this.router.navigate(['/categorynews'])

  }

}
