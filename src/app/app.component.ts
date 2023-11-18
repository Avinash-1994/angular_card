import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:'Neat Tree',
      imgUrl:"assets/img/biking.jpeg",
      userName:'nature',
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis"
    },
    {
      title:'Snowy Mountain',
      imgUrl:"assets/img/mountain.jpeg",
      userName:'Avinash',
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis"
    },
    {
      title:'Mountain Baiking',
      imgUrl:"assets/img/tree.jpeg",
      userName:'Rakshit',
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis"
    },
    {
      title:'Golden Tree',
      imgUrl:"assets/img/tree.jpeg",
      userName:'Mukesh',
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis"
    },
    {
      title:'Golden Tree',
      imgUrl:"assets/img/tree.jpeg",
      userName:'Mukesh',
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis"
    },
    {
      title:'Golden Tree',
      imgUrl:"assets/img/tree.jpeg",
      userName:'Mukesh',
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis"
    }
  ]
}
