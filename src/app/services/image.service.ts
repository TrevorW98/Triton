import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  
  reader;
  
  constructor() {
    this.reader = new FileReader();
  }

  /**
   * @param image File to be conververted to string
   * @returns promise of the file as a string
   */
  convertToString(image: File): Promise<string> {
    return new Promise((resolve, reject) => {

      this.reader.readAsDataURL(image);

      this.reader.onloadend = () => {
        resolve(this.reader.result.toString());
      }
    });
  }

}