import {Component, ElementRef} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
const URL = 'http://localhost:3000';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Load file on directory';
  constructor(private http: Http, private el: ElementRef) {}

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');

    console.log(inputEl.files);
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected

      formData.append('photo', inputEl.files.item(0));
        console.log(inputEl.files.item(0))
  console.log(formData);

      this.http
          .post(URL, formData).map((res:any) => res).subscribe(
          (success) => {
          //  console.log(success);
            alert(success._body);
          },
          (error) => alert(error)
      );

    }
  }
}
