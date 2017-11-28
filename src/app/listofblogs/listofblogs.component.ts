import { Component, OnInit } from '@angular/core';

import {BlogServiceService} from '../blog-service/blog-service.service';

@Component({
  selector: 'app-listofblogs',
  templateUrl: './listofblogs.component.html',
  styleUrls: ['./listofblogs.component.css']
})
export class ListofblogsComponent implements OnInit {

  model: any = {};
  blogs: Object [];
  currentUser: Object;
  favoriteBlogs: Object[];
  filteredBlogs: Object [];
  _listFilter: string;

  constructor(private request: BlogServiceService) {}
  ngOnInit() {
    this.request.loadData()
      .subscribe((data) => {
        this.blogs = data;
        this.filteredBlogs = this.blogs;
        this.currentUser = JSON.parse(localStorage.currentUser);
        this.favoriteBlogs = this.blogs.filter((blog) => {
          return JSON.parse(localStorage.currentUser).favorites.indexOf(blog['id']) > -1;
        });
      });
  }

  AddBlog() {
    console.log(this.model.Title);
    const blog = {
      Title: this.model.Title,
      body: this.model.body,
      createdBy: this.currentUser['id'],
      createdByName: this.currentUser['username'],
      createdOn: new Date(Date.now()).toDateString(),
      category: this.model.category
    };
    this.request.postData(blog)
      .subscribe(data => {
        this.blogs.push(data);
      });
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBlogs = this.listFilter ? this.performFilter(this.listFilter) : this.blogs;
  }

  performFilter(filterBy: string): Object[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.blogs.filter((blog: Object) =>
      blog['Title'].toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}

