import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  }
}
