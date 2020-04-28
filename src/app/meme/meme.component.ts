import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-meme",
  templateUrl: "./meme.component.html",
  styleUrls: ["./meme.component.scss"],
})
export class MemeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  selectedFile = null;

  ngOnInit() {}

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    // this.http.post('')
  }
}
