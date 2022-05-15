import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GiphyFetch, TrendingOptions } from '@giphy/js-fetch-api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }
  getTrendingGifs() {
    const gf = new GiphyFetch(`${environment.giphyApiKey}`);
    // fetch 10 gifs
    const data = gf.trending({ limit: 10 });
    return data;
  }
  searchGifs(search: string, _offset: number) {
    const gf = new GiphyFetch(`${environment.giphyApiKey}`);
    // fetch 10 gifs
    const data = gf.search(search, { sort: 'relevant', lang: 'es', limit: _offset+10, offset: _offset, type: 'gifs' });
    return data;

  }
  getGiffs() {
    return this.gifs.asObservable();
  }

  getInfoGifs(id: any) {
    return this.http.get(`https://api.giphy.com/v1/gifs?api_key=${environment.giphyApiKey}&ids=${id}`);

  }

  uploadGifs(gifs: any) {
    return this.http.post(`https://upload.giphy.com/v1/gifs?api_key=${environment.giphyApiKey}`, gifs);
  }
}
