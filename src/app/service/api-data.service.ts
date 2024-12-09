import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) {}

  fetchWordData(word: string): Observable<any> {
    const url = `${this.apiUrl}${word.trim().toLowerCase()}`;
    return this.http.get(url);
  }
}
