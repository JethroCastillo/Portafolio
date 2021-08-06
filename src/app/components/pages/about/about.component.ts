import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  } 
  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    speed: 1000, //in Seconds
    spaceBetween: 50, //pixels distant 
    loop: true,
    parallax: true
  };  
}
