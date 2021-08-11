import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LeafsComponent } from 'src/app/shared/animations/leafs/leafs.component';


@NgModule({
  declarations: [
    AboutComponent,
    LeafsComponent,
    ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NgxUsefulSwiperModule,
    
  ]
})
export class AboutModule { }
