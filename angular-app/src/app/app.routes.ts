import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FrustratiesComponent } from './frustraties/frustraties.component';
import { LegalComponent } from './legal/legal.component';


export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'frustraties', component: FrustratiesComponent },
  { path: 'legal', component: LegalComponent },
  /* { path: 'frustraties/parkeren', component: ParkerenComponent },
  { path: 'frustraties/snelheid', component: SnelheidComponent },
  { path: 'frustraties/hindernis', component: HindernisComponent },
  { path: 'contact', component: ContactComponent }, */
];
