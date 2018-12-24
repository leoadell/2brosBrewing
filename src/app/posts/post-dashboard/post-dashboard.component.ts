import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  title: string;
  image: string = null;
  content: string;

  buttonText: string="Agregar Entrada"

  constructor(private auth: AuthService, private postService: PostService, public toast: MatSnackBar) { }

  ngOnInit() {
  }

   createPost() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    }
    this.postService.create(data);
    this.title = "";
    this.content = "";
    this.buttonText = "Entrada Agregada";
    setTimeout(()=>(this.buttonText= "Agregar Entrada"), 3000);

    //refactorizar esto para hacer un toast y no esta cochinada
    //this.showToast();
  }

 /*  showToast() {
    this.toast.openFromComponent(ToastComponent), { duration: 500, });
  } */
}
/* @Component({
  selector: 'app-toast',
  template: `hola`
  styles: [`
    .toast {
      color: hotpink;
    }
  `],
})
export class ToastComponent {}

 */
