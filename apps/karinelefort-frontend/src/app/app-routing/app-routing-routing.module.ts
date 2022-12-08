import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryItemComponent } from '../galery-item/galery-item.component';
import { GaleryComponent } from '../galery/galery.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { InfosTarifsComponent } from '../infos-tarifs/infos-tarifs.component';
import { PrestationItemComponent } from '../prestation-item/prestation-item.component';
import { PrestationsComponent } from '../prestations/prestations.component';
import { PrivateGaleriesComponent } from '../private-galeries/private-galeries.component';
import { PrivateGaleryComponent } from '../private-galery/private-galery.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'galerie', component: GaleryComponent },
  { path: 'galerie/:slug', component: GaleryItemComponent },
  { path: 'galeries-privees', component: PrivateGaleriesComponent },
  { path: 'galeries-privees/:slug', component: PrivateGaleryComponent },
  { path: 'info-et-tarifs', component: InfosTarifsComponent },
  { path: 'prestations', component: PrestationsComponent },
  { path: 'prestations/:slug', component: PrestationItemComponent },
  { path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
