import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMyPets } from 'src/app/interfaces/IMyPets';
import { ImageService } from 'src/app/services/image.service';
import { MypetsService } from 'src/app/services/mypets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.page.html',
  styleUrls: ['./pet-edit.page.scss'],
})
export class PetEditPage implements OnInit {
  backLocation = 'my-pets';
  title = 'My Pets';

  chosenPet?: IMyPets;

  constructor(
    private imageConverter: ImageService,
    private route: ActivatedRoute,
    private petsService: MypetsService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  removePetProfile(){
    
  }

  updatedImage?: string;

  ionViewWillEnter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.petsService.getPet(id)
      .subscribe((pet: IMyPets) => this.chosenPet = pet);
  }

  onFileSelected(event):void {

    let file: File = event.target.files[0];

    if(file){
      this.imageConverter.convertToString(file)
      .then(str => {
        this.updatedImage = str;
      });
    }

  }

  cancel():void {

  }

  save(): void {
    if(this.updatedImage){
      this.chosenPet.petPicture = this.updatedImage;
    }
    this.petsService.updatePet(this.chosenPet);
    this.router.navigate([`pet-info/${this.chosenPet.id}`]);
  }

}
