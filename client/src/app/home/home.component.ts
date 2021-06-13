import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      image:
        'https://images.unsplash.com/photo-1612640941603-3bc7afb57806?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1623387417655-a2f0add6eade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1571743581511-6c06f3f5c3ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1883&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1566371486490-560ded23b5e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1606324670038-a8fbe00cd87d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1437&q=80',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
