import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../models/projects';
import { Observable } from 'rxjs';
import { GalleryImages } from '../models/image-gallery';


@Injectable({
  providedIn: 'root'
})
export class JsonDataFilesService {

  constructor(
    private http:HttpClient
  ) { }
  
  getProjects(): Observable<Projects>{
    const project_url = "https://raw.githubusercontent.com/Pradeepsuthar/Online__Resume__Pradeep_Suthar/master/src/assets/json_files/projects.json";
    return this.http.get<Projects>(project_url);
  }

  getGalleryImage(): Observable<GalleryImages>{
    const galleryImages_url = "https://raw.githubusercontent.com/Pradeepsuthar/Online__Resume__Pradeep_Suthar/master/src/assets/json_files/gallery-images.json"
    // const galleryImages_url = "assets/json_files/gallery-images.json"
    return this.http.get<Projects>(galleryImages_url);
  }
}
