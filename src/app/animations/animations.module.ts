import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroListBasicComponent } from './hero-list-basic/hero-list-basic.component';
import { MyBasicExampleComponent } from './my-basic-example/my-basic-example.component';
import { DropdownExampleComponent } from './dropdown-example/dropdown-example.component';



@NgModule({
  declarations: [
    HeroListBasicComponent,
    MyBasicExampleComponent,
    DropdownExampleComponent
  ],
  imports: [CommonModule],
  exports: [
    HeroListBasicComponent,
    MyBasicExampleComponent,
    DropdownExampleComponent
  ],
  providers: []
})

export class AnimationsModule {}
