import { ElementRef, Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leafs',
  templateUrl: './leafs.component.html',
  styleUrls: ['./leafs.component.scss']
})
export class LeafsComponent implements OnInit {

  imgleafs = [
  "https://res.cloudinary.com/dyjo8cam3/image/upload/v1628910905/Leafs/120-1209055_leaf-icons-download-for-free-in-png-and_prf3p9.png", 
  "https://res.cloudinary.com/dyjo8cam3/image/upload/v1628910905/Leafs/1003px-Leaf_icon_15.svg_ssavax.png", 
  "https://res.cloudinary.com/dyjo8cam3/image/upload/v1628910905/Leafs/leaf__40593.1560276423_zxdthe.png"
  ];

  constructor(private el:ElementRef, private render: Renderer2) { }
  
  ngOnInit(): void {  
    var container =document.getElementById('leafcontainer');
    for(let i=0; i<6; i++){
      container?.appendChild(this.createLeaf());
    }
  }
  
  randomVal(min:number, max:number){
    const rand = Math.floor(Math.random() * (max - min +1) + min)
    return rand;
  }

  randomArr(array:any) {
    const arritem = Math.floor(Math.random() * array.length)
    const item = array[arritem]
    return item;
  }

  initLeaf(){
    var container =document.getElementById('leafcontainer');
    return container?.appendChild(this.createLeaf());
  }

  createLeaf(){
    // Create the elements
    var leafDiv = this.render.createElement('div');
    var image = this.render.createElement('img');
    // Leaf div Animations 
    leafDiv.className = 'leafs';
    leafDiv.style.left = this.randomVal(25,450) +'px';
    leafDiv.style.animationName = 'drop, fade';
    leafDiv.style.animationDuration = this.randomVal(3,12) +'s';
    // Get Random Item 
    image.src = this.randomArr(this.imgleafs);
    // leaf img Animations
    image.style.animationName = 'spinAndFlip';
    image.style.animationDuration = this.randomVal(3,9)+'s';
    //put the img on the div leafs
    leafDiv.appendChild(image);

    return leafDiv;
  }

}
