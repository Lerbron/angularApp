import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Params } from '@angular/router';

@Component({
  selector: 'app-homedetail',
  templateUrl: './homedetail.component.html',
  styleUrls: ['./homedetail.component.scss']
})
export class HomedetailComponent implements OnInit {
  id: any;
  content: any;
  constructor( public route: ActivatedRoute,
               public http: Http
               ) { }

  ngOnInit() {
    this.getId();
    this.init();
  }
  public init() {
    this.http.get('https://cnodejs.org/api/v1/topics?page=0&limit=10')
      .subscribe((res) => {
        res = res.json();
        console.log('detail', res)
        this.content = res['data'][this.id]['content'];
        console.log('content..', this.content);
      })
  }
  public getId() {
    this.id = this.route.params['value']['id'];
    // const id = this.route.params
    //   .switchMap((params: Params) => params['id'])
    //   .subscribe(x => console.log(x))
  }
}
