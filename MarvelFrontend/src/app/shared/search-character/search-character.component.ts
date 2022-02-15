import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.css']
})
export class SearchCharacterComponent implements OnInit {

  formSearch: FormGroup;
  @Output() textSearch = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.formSearch = this.formBuilder.group({});
  }


  ngOnInit(): void {
    this.initializationForm();
    this.formSearch.controls['searchInput'].markAsTouched();
  }

  /**
  * Se inicializa variables del front
  */
  initializationForm() {
    this.formSearch = this.formBuilder.group({
      searchInput: [
        null
      ]
    });
  }

  /**
   * Se consulta la informacion de un personaje
   */
  searchCharacter() {
    this.textSearch.emit(this.formSearch.value.searchInput);
  }

  /**
   * Se obtiene le valor vacio
   */
  getEmptyValue(event: any) {
    if (event.target.value === '') {
      this.textSearch.emit(this.formSearch.value.searchInput);
    }
  }

}
