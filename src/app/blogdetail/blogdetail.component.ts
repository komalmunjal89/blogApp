import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService} from "../blog-service/blog-service.service";


@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  blog: Object;
  title;
  body;
  category;
  edit: boolean=false;
  constructor(private _route: ActivatedRoute,
              private router: Router,
              private request: BlogServiceService) {
    const id = +this._route.snapshot.paramMap.get('id');
    this.request.getBlog(id)
      .subscribe((data)=>{
        this.blog = data;
        console.log(this.blog);
      });
  }

  DeleteBlog(){
    this.request.deleteData(this.blog)
      .subscribe(data => {
        // this.blog.delete(data);
        this.router.navigate(['blogs']);
      });
  }

  EditBlog(blog){
    this.edit= true;
    this.title= blog.Title;
    this.body= blog.body;
    this.category= blog.category;
  }

  updateBlog(t,b,c,id){
    var item={
      Title: t,
      body: b,
      category: c,
      id: id
    }
    console.log(item);
    this.request.updateData(item)
      .subscribe(data=>{
        console.log(item)
      this.edit= false;
      this.router.navigate(['blogs'])
    })
  }
  ngOnInit() {
  }
}
