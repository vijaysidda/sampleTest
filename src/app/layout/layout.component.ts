import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  user:any;
  constructor(private router:Router) {}

  ngOnInit(): void {
    let auth = localStorage.getItem('auth')
    if(auth) {
      this.user = JSON.parse(auth)
    } else {
      this.backToLogin()
    }
  }

  backToLogin() {
    this.router.navigate(['/login'])
  }

  goToDashboard() {
    this.router.navigate(['layout/dashboard'])
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }


}
