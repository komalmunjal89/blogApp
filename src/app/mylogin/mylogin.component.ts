import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css']
})
export class MyloginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  ob:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,

  ){ }

  ngOnInit() {

    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          if(data) {
            this.returnUrl = '/blogs';
            this.router.navigateByUrl(this.returnUrl);
            this.ob=true;
          } else {
            alert("Incorrect Username/Password!");
          }
        },
        error => {
          this.loading = false;
        });
  }
}
