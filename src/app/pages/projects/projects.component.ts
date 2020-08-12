import { Component, OnInit } from '@angular/core';
import { JsonDataFilesService } from 'src/app/services/json-data-files.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project_List:any=[];

  constructor(
    private projectService:JsonDataFilesService
  ) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(res=>{
      this.project_List = res;
    })
  }

}
