import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeresipontFormComponent } from './meresipont-form/meresipont-form.component';
import { MeresipontComponent } from './meresipont/meresipont.component';

const routes: Routes = [
  {
    path: '',
    component: MeresipontComponent
    },
    {
      path: 'homero-form',
      component: MeresipontFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
