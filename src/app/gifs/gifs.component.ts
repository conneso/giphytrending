import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

  Gifs: any[] = [];
  subscription: Subscription = new Subscription;
  ShowGifs: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs().then(rs => {
      this.Gifs = rs.data;
    });
    this.dataService.gifs.subscribe(res=>{
      this.Gifs = res.data;
    })

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ShowInforGifs(id: any) {
    this.dataService.getInfoGifs(id).subscribe((reponse: any) => {

      this.Gifs = reponse.data;
    });
  }

}
