import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from './sidemenu/sidemenu.component';




@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  
  exports: [
    SidemenuComponent
    //exportamos el hijo dentro de la madre (shared/sidemenu)
  ],
  
  
})
export class SharedModule { }
