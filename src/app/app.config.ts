import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { provideHttpClient } from '@angular/common/http';
export const routes: Routes = [
  { path: '', component: HomeComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient()]
};
