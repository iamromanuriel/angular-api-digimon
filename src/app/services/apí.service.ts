import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, ApiResponse } from '../data/ModelCharacter';

@Injectable({
  providedIn: 'root',
})
export class ApíService {
  private readonly baseurl = 'https://digimon-api.vercel.app/api/digimon'

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseurl}`)
  }

  getCharacterString(): Observable<any>{
    return this.http.get<any>(`${this.baseurl}`);
  }
}
