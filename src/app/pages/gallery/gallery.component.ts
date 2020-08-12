import { Component, OnInit } from '@angular/core';
import { JsonDataFilesService } from 'src/app/services/json-data-files.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryImages:any = []
  constructor(
    private projectService:JsonDataFilesService
  ) { }

  ngOnInit(): void {
    this.projectService.getGalleryImage().subscribe(res=>{
      this.galleryImages = res;
    })
  }

}
