import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articles:any=[{date:"12/3/2023",tittle:"Article One",description:"Article OneArticle OneArticle OneArticle OneArticle One",img:"assets/images/img_1.jpg"},
{date:"9/3/2023",tittle:"Article Two",description:"Article OneArticle OneArticle OneArticle OneArticle One",img:"assets/images/img_2.jpg"},
{date:"5/3/2023",tittle:"Article Three",description:"Article OneArticle OneArticle OneArticle OneArticle One",img:"assets/images/img_3.jpg"}]
  constructor() { }

  ngOnInit() {
  }

}
