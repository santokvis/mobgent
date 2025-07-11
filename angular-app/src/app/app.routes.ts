import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FrustratiesComponent } from './frustraties/frustraties.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'frustraties', component: FrustratiesComponent }
];
