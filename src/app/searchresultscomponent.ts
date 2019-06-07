import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {

  parameter: string
  searchString: string
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    // console.log(this.router.url);
    this.activatedRoute.url.subscribe(response => {
      this.parameter = response[0].path;
      this.parameter = response[1].path;
      // console.log(response)
    });

   
    if(this.parameter == 'saloon') {
      // search by saloon name
    }
  }

}
