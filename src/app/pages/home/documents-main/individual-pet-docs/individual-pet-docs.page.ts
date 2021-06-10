import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { IDocs } from 'src/app/interfaces/IDocs';
import { DomSanitizer } from '@angular/platform-browser';
// import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';


@Component({
  selector: 'app-individual-pet-docs',
  templateUrl: './individual-pet-docs.page.html',
  styleUrls: ['./individual-pet-docs.page.scss'],
})
export class IndividualPetDocsPage implements OnInit {
  backLocation = '/documents-main';
  title = 'Documents'

  constructor(
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private docService: DocumentsService,
    private dService: DataService,
    // private downloader: Downloader,
    // private transfer: FileTransfer,
    //  private file: File
     ) { }
    AddDocname: FormGroup;
    docArr: IDocs[];
    email: string;
    document: string;
    submit: boolean = false;
    submit2: boolean = false;
    petName: string;


  // request: DownloadRequest = {
  //   uri: "",
  //   title: 'MyDownload',
  //   description: '',
  //   mimeType: '',
  //   visibleInDownloadsUi: true,
  //   notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
  //   destinationInExternalFilesDir: {
  //     dirType: 'Downloads',
  //     subPath: 'MyFile.apk'
  //   }
  // };
  // fileTransfer: FileTransferObject = this.transfer.create();

  ngOnInit() {
    this.submit = false;
    this.submit2=false;
    this.AddDocname = this.formBuilder.group({
      docName: new FormControl('', Validators.required),
    })
  }

  ionViewWillEnter() {
    this.submit = false;
    this.submit2=false;
    this.petName = this.docService.chosenPet;
    this.email = this.dService.User.email;
    this.docArr = this.docService.DocArrEmail.filter(a => {
      return a.petName == this.petName;
    });
    // console.log(this.docArr);

  }
  getContent(i) {
    // return URL.createObjectURL(this.sanitizer.bypassSecurityTrustUrl(this.docArr[i].document));
    //return this.sanitizer.bypassSecurityTrustUrl(this.docArr[i].document);
    return this.sanitizer.bypassSecurityTrustUrl("data:application/pdf;base64," + this.docArr[i].document);
    //return "data:application/pdf;base64," + this.docArr[i].document;
    // this.fileTransfer.download(this.docArr[i].document, File.dataDirectory+'file.pdf');
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
        // console.log(convertBase64);
        //file is now encoded
        this.docService.setDocument(convertBase64);
        this.submit = true;
      };
      reader.readAsDataURL(file);
    }
  }
  setName(){
    if (this.AddDocname.invalid) {
      alert('Fix errors on form');
    } else {
    this.docService.document.docName = this.AddDocname.controls['docName'].value;
    this.submit2=true;
    }
  }
  addDocument() {
    this.docService.addDocument().then((res: any) => {
      // console.log(res);
      this.docService.getDocsEmail();
    }).then(()=>{
      this.docArr = this.docService.DocArrEmail.filter(a => {
        return a.petName == this.petName;
      });
    });
  }
}
