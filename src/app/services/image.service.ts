import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  
  reader;
  
  constructor() {
    this.reader = new FileReader();
  }

  /**
   * @param image File to be converted to string
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
