import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from '../galery/galery.component';
import { HomepageComponent } from '../homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'galerie', component: GaleryComponent },
  { path: '', component: HomepageComponent },
  { path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
