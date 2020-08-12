import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"experience",component:ExperienceComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"about-us",component:AboutUsComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
