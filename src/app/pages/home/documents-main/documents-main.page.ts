import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-documents-main',
  templateUrl: './documents-main.page.html',
  styleUrls: ['./documents-main.page.scss'],
})
export class DocumentsMainPage implements OnInit {
  backLocation = 'home';
  title = 'Documents';

  constructor(private docService: DocumentsService) { }

  ngOnInit() {
  }
  
  onFileSelected(event): void {

    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Store base64 encoded representation of file
      
        let result = reader.result.toString();
        result = result.substring(result.indexOf(',') + 1);
       
        const convertBase64 = btoa(result);
        console.log(convertBase64);
        //reconvert to image on the screen
      
      };
      reader.readAsDataURL(file);
    }
  }

}
