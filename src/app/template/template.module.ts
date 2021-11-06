import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './pages/basics/basics.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { SwitchesComponent } from './pages/switches/switches.component';
import {CustomMinDirective} from "./directives/custom-min.directive";


@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    SwitchesComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
