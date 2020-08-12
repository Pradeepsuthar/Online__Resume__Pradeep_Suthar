import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../models/projects';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonDataFilesService {

  pro
  constructor(
    private http:HttpClient
  ) { }

  project_url = "assets/json_files/projects.json";
  
  getProjects(): Observable<Projects>{
    return this.http.get<Projects>(this.project_url);
  }
}
