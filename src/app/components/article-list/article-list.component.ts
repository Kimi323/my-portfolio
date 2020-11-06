import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ARTICLES } from '../../models/mock-article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleList: Article[] = ARTICLES;
  constructor() { }

  ngOnInit(): void {
  }

}
