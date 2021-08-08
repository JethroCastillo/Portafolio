import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    var lenguage = c3.generate({
      bindto: '#lenguage',
      data: {
        columns: [
          ['JavaScript (NodeJS ES6+)', 120],
          ['TypeScript', 120],
          ['Python', 80],
          ['PHP', 20],
          ['Java', 50],
          ['C++', 50],
        ],
        type: 'donut',
        onclick: function (d, i) {
          console.log('onclick', d, i);
        },
        onmouseover: function (d, i) {
          console.log('onmouseover', d, i);
        },
        onmouseout: function (d, i) {
          console.log('onmouseout', d, i);
        },
      },
      donut: {
        title: 'Lenguages',
      },
    });

    var database = c3.generate({
      bindto: '#database',
      data: {
        columns: [
          ['MySQL (MariaDB)', 120],
          ['Postgress', 80],
          ['SQLite', 60],
          ['MongoDB', 120],
          ['FireStore', 60],
        ],
        type: 'donut',
        onclick: function (d, i) {
          console.log('onclick', d, i);
        },
        onmouseover: function (d, i) {
          console.log('onmouseover', d, i);
        },
        onmouseout: function (d, i) {
          console.log('onmouseout', d, i);
        },
      },
      donut: {
        title: 'Databases',
      },
    });

    var frontend = c3.generate({
      bindto: '#frontend',
      data: {
        columns: [
          ['Angular', 80],
          ['React', 60],
          ['Vue', 20],
          ['HTML5', 40],
          ['Handlebars', 20],
        ],
        type: 'donut',
        onclick: function (d, i) {
          console.log('onclick', d, i);
        },
        onmouseover: function (d, i) {
          console.log('onmouseover', d, i);
        },
        onmouseout: function (d, i) {
          console.log('onmouseout', d, i);
        },
      },
      donut: {
        title: 'Frontend',
      },
    });

    var backtend = c3.generate({
      bindto: '#backend',
      data: {
        columns: [
          ['Express', 120],
          ['Flask', 40],
          ['Django', 40],
          ['Laravel', 30],
          ['NestJS', 50],
          ['Firebase', 60],

        ],
        type: 'donut',
        onclick: function (d, i) {
          console.log('onclick', d, i);
        },
        onmouseover: function (d, i) {
          console.log('onmouseover', d, i);
        },
        onmouseout: function (d, i) {
          console.log('onmouseout', d, i);
        },
      },
      donut: {
        title: 'Backend',
      },
    });
    var extras = c3.generate({
      bindto: '#extras',
      data: {
        columns: [
          ['Git', 100],
          ['AppDev', 70],
          ['Charts', 40],
          ['Payments', 20],
          ['Also', 100],

        ],
        type: 'pie',
        onclick: function (d, i) {
          console.log('onclick', d, i);
        },
        onmouseover: function (d, i) {
          console.log('onmouseover', d, i);
        },
        onmouseout: function (d, i) {
          console.log('onmouseout', d, i);
        },
      },
    });
    var styles = c3.generate({
      bindto: '#styles',
      data: {
        columns: [
          ['CSS3 + Responsive', 80],
          ['Bootstrap', 100],
          ['Materialize', 30],
          ['Animations CSS', 50],
          ['AngularMaterial', 50],

        ],
        type: 'pie',
        onclick: function (d, i) {
          console.log('onclick', d, i);
        },
        onmouseover: function (d, i) {
          console.log('onmouseover', d, i);
        },
        onmouseout: function (d, i) {
          console.log('onmouseout', d, i);
        },
      },
    });




    // Sphere Word

    const canvas = document.getElementById('sphere');

const texts = [
  'NodeJS', 'Stripe', 'Paypal',
  'Github', 'ReactNative', 'Ionic', 'Gitlab',
  'Redux', 'JsonWebToken', 'Firebase', 'Heroku',
  'Charts C3', 'ChartsJS',
  'MariaDB', 'Also',
];
const counts = [1,2,4,5,4,2,1];

const options = {
  tilt: Math.PI / 9,
  initialVelocityX: 0.09,
  initialVelocityY: 0.09,
  initialRotationX: Math.PI * 0.14,
  initialRotationZ: 0
};

wordSphere(canvas, texts, counts, options);
 
/**
 * WordSphere
 * Written by Hyojun Kim in 2017. Licensed in MIT.
 */
function wordSphere(canvas:any, texts:any, counts:any, options:any) {
  const π = Math.PI; // happy math!
  //Canvas size
  const {
    width = 400,
    height = 400,
    radius = 120,
    padding = 20,
    fontSize = 22,
    tilt = 0,
    initialVelocityX = 2,
    initialVelocityY = 2,
    initialRotationX = 2,
    initialRotationZ = 2,
  } = options;
  
  let vx = initialVelocityX, vy = initialVelocityY;
  let rx = initialRotationX, rz = initialRotationZ;
  
  // canvas setup
  let ctx = canvas.getContext('2d'); 
  ctx.textAlign = 'center';
  
  // Hi-DPI support
  canvas.width = width * 3;
  canvas.height = height * 3;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.scale(2,2); 

  // scrolling
  let clicked = false, lastX:any, lastY:any;
  canvas.addEventListener('mousedown', (event: { screenX: any; screenY: any; }) => {
    clicked = true;
    lastX = event.screenX;
    lastY = event.screenY;
  });

  canvas.addEventListener('mousemove', (event: { screenX: number; screenY: number; }) => {
    if (!clicked) return;
    var dx = event.screenX - lastX 
    var dy = event.screenY - lastY;
    [lastX, lastY] = [event.screenX, event.screenY];

    // rotation update
    rz += -dy * 0.01;
    rx += dx * 0.01;

    // velocity update
    vx = dx * 0.1;
    vy = dy * 0.1;

    if (!looping) startLoop();
  });

  canvas.addEventListener('mouseup', (event: any) => clicked = false);
  canvas.addEventListener('mouseleave', (event: any) => clicked = false);
  
  function rot(x:any,y:any,t:any) {
    return [x*Math.cos(t)-y*Math.sin(t), x*Math.sin(t)+y*Math.cos(t)];
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ix = 0, iz = 0, i = 1;
    for (const text of texts) {
      const degZ = (π/(counts.length-1)) * iz;
      const degX = (2*π/counts[iz]) * ix;

      let x = radius * Math.sin(degZ) * Math.cos(degX);
      let y = radius * Math.sin(degZ) * Math.sin(degX); 
      let z = radius * Math.cos(degZ) + 8*(ix % 2) /* randomness */;

      // camera transform
      [y,z] = rot(y, z, tilt);
      [x,z] = rot(x, z, rz);
      [x,y] = rot(x, y, rx);

      // convert to cartesian and then draw.
      const alpha = 0.6 + 0.4 * (x/radius);
      const size = fontSize + 2 + 5*(x/radius);
      ctx.fillStyle = `rgba(0,0,0,${alpha})`;
      ctx.font = `${size}px "Helvetica Neue", sans-serif`;
      ctx.fillText(text, y + width/2, -z + height/2);

      ix--;
      if (ix < 0) {
        iz++;
        ix = counts[iz] - 1;
      }
      i++;
    }
  }

  // renderer
  let looping = false;
  function rendererLoop() {
    if (looping) window.requestAnimationFrame(rendererLoop);
    render();
    
    // deacceleration - dirty code xD
    if (vx > 0) vx = vx - 0.01;
    if (vy > 0) vy = vy - 0.01;
    if (vx < 0) vx = vx + 0.01;
    if (vy > 0) vy = vy + 0.01;
    if (vx == 0 && vy == 0) stopLoop();
    
    rz += vy * 0.01;
    rx += vx * 0.01;
  }

  function startLoop() {
    looping = true;
    window.requestAnimationFrame(rendererLoop);
  }

  function stopLoop() {
    looping = false;
  }
  startLoop();
}



  }
}
