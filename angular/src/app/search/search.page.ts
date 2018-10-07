import { Component } from '@angular/core';

import { legends } from '../names/nameslist'

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string = '';
  results = [];

  ngOnInit() {
  }

  onSearch(event) {
    
    let val = event.target.value

    if (val && val.trim() !== ''){
      this.results = legends.filter(function(name) {
        return name.toLowerCase().includes(val.toLowerCase())
      })
    } 
    else {
      this.results = []
    }
  }
}
