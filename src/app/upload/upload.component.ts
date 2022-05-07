import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {FileUploadModule} from 'primeng/fileupload';
import {DataService} from "../data.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {


  url=`https://upload.giphy.com/v1/gifs?api_key=${environment.giphyApiKey}&username=${environment.username}`;
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService,private dataService : DataService) {}
  ngOnInit(): void {
  }

  onUpload(event : any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    this.dataService.uploadGifs(this.uploadedFiles);
  }

}
