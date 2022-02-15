import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() image = '';
  @Input() name = '';
  @Input() comicsNumber = 0;
  @Input() seriesNumber = 0;
  @Input() storiesNumber = 0;
  @Input() eventsNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
