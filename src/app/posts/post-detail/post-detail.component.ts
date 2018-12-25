import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  id = this.route.snapshot.paramMap.get('id');
  editing: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.getPost();
    console.log(this);
  }

  getPost() {
    return this.postService.getPostData(this.id)
      .subscribe(data => this.post = data);
  }

  updatePost() {
    const fromData = {
      title: this.post.title,
      content: this.post.content
    }
    this.postService.update(this.id, fromData);
    this.editing=false;
  }

  delete() {
    this.postService.delete(this.id);
    this.router.navigate(["/blog"]);
  }
}
