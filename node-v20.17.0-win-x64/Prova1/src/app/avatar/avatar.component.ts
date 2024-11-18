import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  people = [
    {
      name: 'Jotaro Kujo',
      photoUrl: 'https://i.pinimg.com/736x/e8/87/94/e88794a05c6c0c148a56d1b92e4b7b23.jpg',
      description: 'Jotaro Kujo, de JoJos Bizarre Adventure, es un joven fuerte y decidido con el Stand Star Platinum. Con su actitud cool y la frase Yare yare daze, se enfrenta a poderosos enemigos para proteger a sus seres queridos, convirtiéndose en un personaje emblemático.'
    },
    {
      name: 'Dio Brando',
      photoUrl: 'https://i.pinimg.com/236x/29/28/eb/2928ebddc053481daba9e6c03b105778.jpg',
      description: 'Dio Brando es el antagonista de JoJos Bizarre Adventure. Ambicioso y carismático, busca la inmortalidad con su Stand, The World, que puede detener el tiempo. Su enfrentamiento con la familia Joestar lo convierte en un ícono del anime.'
    }
  ];

  currentPersonIndex = 0;

  ngOnInit() {
    this.changePerson();
  }

  get currentPerson() {
    return this.people[this.currentPersonIndex];
  }

  changePerson() {
    this.currentPersonIndex = Math.floor(Math.random() * this.people.length);
  }
}