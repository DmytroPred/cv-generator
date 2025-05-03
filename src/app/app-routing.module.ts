import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateCVComponent } from './components/generate-cv/generate-cv.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: GenerateCVComponent,
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
