import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: string = '';
  gifs: any;
  offset: number = 0;
  @ViewChild('gif') gif!: ElementRef;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  search(search: string) {
    if (search == '') {
      search = this.gif.nativeElement.value;
    }
    if (search !== '') {
      this.dataService.searchGifs(search, this.offset).then(res => {
        this.offset += 10;
        this.dataService.gifs.next(res);
      }).catch(e => {
        console.error(e);
      });

    }

  }

}
