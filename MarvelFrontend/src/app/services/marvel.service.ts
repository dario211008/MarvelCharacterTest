import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  // VARIABLES
  private apiRurl = environment.apiUrl;
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  /**
   * Retorna lista de personajes de marvel
   */
  public gerMarvelCharacters(): Observable<any> {
    var ts = new Date().getTime();
    var message = ts + environment.pvtkey + environment.pubkey;
    const md5 = new Md5();
    var hash = md5.appendStr(message).end();
    this.apiRurl += '?ts=' + ts.toString() + '&apikey=' + environment.pubkey + '&hash=' + hash.toString();
    // --> CABECERA
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    // --> EJECUCION DEL SERVICIO
    return this.http.get(this.apiRurl, { headers: this.headers });
  }

}
