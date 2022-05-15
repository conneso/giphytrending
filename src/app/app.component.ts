import { Component, HostListener, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('search')
  search!: SearchComponent;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // debugger;
    // 200 is the height from bottom from where you want to trigger the infintie scroll, can we zero to detect bottom of window
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      // console.log('bottom');
      this.search.search('');
    }
    // if ((document.body.clientHeight + window.scrollY + 200) >= document.body.scrollHeight) {
    //     this.search.search('');
    // }
  }

  @HostListener('body:scroll', ['$event'])
  onScroll(event: any) {
    debugger;
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 1) {
      
    }
  }
}
