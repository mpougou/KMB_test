import { Component, Input } from '@angular/core';
import { CardInterface } from '../card-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor() {

  }


  defaultImg: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Red_Kitten_01.jpg/800px-Red_Kitten_01.jpg"
  @Input() cardData!: CardInterface

  ngOnInit() {
    console.log('cardData', this.cardData)
  }

}
