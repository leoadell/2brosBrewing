import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  title: string;
  image: string = null;
  content: string;

  buttonText: string = "Agregar Entrada"
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private auth: AuthService,
    private postService: PostService,
    public toast: MatSnackBar,
    private storage: AngularFireStorage,
    private router: Router,
  ) { }

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
    alert("Entrada Agregada exitosamente");
    this.router.navigate(["/blog"]);


    //refactorizar esto para hacer un toast y no esta cochinada
    //this.showToast();
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    if (file.type.split('/')[0] !== 'image') {
      return alert("Solo archivos de imagen");
    }
    else {
      const task = this.storage.upload(path, file);
      this.downloadURL = this.storage.ref(path).getDownloadURL();
      this.uploadPercent = task.percentageChanges();
      console.log('image uploaded!')
      this.downloadURL.subscribe(url => this.image = url);
    }
  }
}
 /*  showToast() {
this.toast.openFromComponent(ToastComponent), { duration: 500, });
}
}
@Component({
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
