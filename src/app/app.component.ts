import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';
  emailValue:any;

  constructor(private router:ActivatedRoute, private api:ApiService,private route:Router) {
    // this.emailValue = this.router.snapshot.paramMap.get('id')
    this.route.events.subscribe((event:any) => {
      if(event instanceof ActivationEnd) {
        let e:any = event;
        if(e.snapshot._routerState && e.snapshot._routerState.url) {
          this.emailValue = e.snapshot._routerState.url.slice(11)
          console.log("email",this.emailValue)
        }
      }
    })
  }
  ngOnInit() {
    // this.api.userDetails.subscribe(data => {
    //   console.log("====",data)
    //   this.emailValue = data;
    //   console.log("++++++",this.emailValue)
      
    // })
  //  this.emailValue= this.api.userValue;
  }
}
