import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { MarvelCharactersResponse, Result } from 'src/app/services/response/marvel-characters-response';

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.component.html',
  styleUrls: ['./marvel-characters.component.css']
})
export class MarvelCharactersComponent implements OnInit {

  marvelcharactersResponse: MarvelCharactersResponse;
  resultsByPage = new Array<Result>();
  totalItems: number;
  totalPages: number;
  itemsPerPage = 6;
  actualPage: number;

  constructor(private marvelServices: MarvelService) {
    this.marvelcharactersResponse = new MarvelCharactersResponse();
    this.totalItems = 0;
    this.totalPages = 0;
    this.actualPage = 0;
  }

  ngOnInit(): void {
    this.getMarvelCharacters();
  }

  /**
   * Se obtiene lista de personajes de marvel
   */
  getMarvelCharacters() {
    // SE CONSTRUYE EL REQUEST PARA LA PETICION DE CONSULTA
    const serviceExecute = this.marvelServices.gerMarvelCharacters();
    serviceExecute.subscribe(
      {
        next: response => {
          if (response.code === 200) {
            this.marvelcharactersResponse = JSON.parse(JSON.stringify(response));
            this.totalItems = this.marvelcharactersResponse.data.count;
            this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
            let startIndex = this.itemsPerPage * this.actualPage;
            let endIndex = startIndex + this.itemsPerPage;
            this.resultsByPage = this.marvelcharactersResponse.data.results.slice(startIndex, endIndex);
          } else {
            alert(response.message);
          }
        },
        error: error => {
          // SIN IMPLEMENTACION
        }

      }
    );
  }

  /**
   * Pasa a la anterior pagina
   */
  previousPage() {
    if (this.actualPage > 0) {
      this.actualPage--;
      let startIndex = this.itemsPerPage * this.actualPage;
      let endIndex = startIndex + this.itemsPerPage;
      this.resultsByPage = this.marvelcharactersResponse.data.results.slice(startIndex, endIndex);
    }
  }

  /**
   * Pasa a la siguiente pantalla
   */
  nextPage() {
    if (this.totalPages > this.actualPage + 1) {
      this.actualPage++;
      let startIndex = this.itemsPerPage * this.actualPage;
      let endIndex = startIndex + this.itemsPerPage;
      this.resultsByPage = this.marvelcharactersResponse.data.results.slice(startIndex, endIndex);
    }
  }

  getTextSearch(searchText: string) {
    if (searchText != null) {
      var characters = this.marvelcharactersResponse.data.results.filter(x => x.name.toLowerCase().includes(searchText.toLowerCase()))
      this.totalItems = characters.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      let startIndex = this.itemsPerPage * this.actualPage;
      let endIndex = startIndex + this.itemsPerPage;
      this.resultsByPage = characters.slice(startIndex, endIndex);
    }
  }

}
