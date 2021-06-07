import { Component, OnInit } from '@angular/core';
import { IJournal } from 'src/app/interfaces/IJournal';
import { JournalService } from 'src/app/services/journal.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-add-an-entry',
  templateUrl: './add-an-entry.page.html',
  styleUrls: ['./add-an-entry.page.scss'],
})
export class AddAnEntryPage implements OnInit {
  backLocation = 'journal-main';
  title = 'Pet Journal';

  constructor(private jService: JournalService, private formBuilder: FormBuilder, private router: Router) { }
  
  AddEntryForm: FormGroup;

  public newEntry: IJournal = {
    id: 0,
    petName: "",
    email: "",
    date: null,
    summary: "",
    notes: ""
  }

  ngOnInit() {
    this.AddEntryForm = this.formBuilder.group({
      pName: new FormControl('', Validators.required),
      Summary: new FormControl('', Validators.required),
      Date: new FormControl('', Validators.required)
    })
  }
  // this.calendar.createCalendar('MyCalendar').then(
  //   (msg) => { console.log(msg); },
  //   (err) => { console.log(err); }
  // );

  submitForm(){
    if (this.AddEntryForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      // console.log(this.AddPetForm.value);
      this.newEntry.petName = this.AddEntryForm.controls['pName'].value;
      this.newEntry.summary = this.AddEntryForm.controls['Summary'].value;
      this.newEntry.date = this.AddEntryForm.controls['Date'].value;
      console.log(this.newEntry);
      this.save();
      this.AddEntryForm.reset();
      this.router.navigate(['/home']);
    }
  }

  save(){
    this.jService.newEntry(this.newEntry).then((res:any)=>{
      console.log(res);
    });
  }

}
