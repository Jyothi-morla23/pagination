import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: './assets/beach.jpg',
    },
    {
      title: 'At the forest',
      url: './assets/forest.jpeg',
    },
    {
      title: 'At the sunrise',
      url: './assets/sunrise.jpeg',
    },
    {
      title: 'At the waterfal',
      url: './assets/waterfal.jpeg',
    },
    {
      title: 'At the beach',
      url: './assets/beach.jpg',
    },
    {
      title: 'At the forest',
      url: './assets/forest.jpeg',
    },
    {
      title: 'At the sunrise',
      url: './assets/sunrise.jpeg',
    },
    {
      title: 'At the waterfal',
      url: './assets/waterfal.jpeg',
    },
    {
      title: 'At the beach',
      url: './assets/beach.jpg',
    },
    {
      title: 'At the forest',
      url: './assets/forest.jpeg',
    },
    {
      title: 'At the sunrise',
      url: './assets/sunrise.jpeg',
    },
    {
      title: 'At the waterfal',
      url: './assets/waterfal.jpeg',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  // getClass(i: number) {
  //   const classes = [];

  //   if (something()) {
  //     classes.push('active');
  //   }
  //   if (somethingElse()) {
  //     classes.push('someOtherClass');
  //   }
  //   if (somethingYetElse()) {
  //     classes.push('other');
  //   }

  //   if (yetAnotherCheck()) {
  //     classes.push('check');
  //   }
  //   return classes;
  // }
}
