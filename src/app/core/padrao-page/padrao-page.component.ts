import { Component, OnInit } from '@angular/core';
import { SiteModule } from '../../site/site.module';
import { fromEventPattern } from 'rxjs';
import { Router } from '@angular/router';
import { UserApiStoreService } from 'src/app/services/user-api/user-api-store.service';

@Component({
  selector: 'app-padrao-page',
  templateUrl: './padrao-page.component.html',
  styleUrls: ['./padrao-page.component.scss'],
})
export class PadraoPageComponent implements OnInit {
  constructor(private route: Router, public userStore: UserApiStoreService) {}
  isLoged: boolean = this.userStore.isLoged;
  ngOnInit() {
    this.isLoged = this.userStore.isLoged;
  }
  handleNavigation(evento: string) {
    console.log(evento);
    this.route.navigateByUrl('/' + evento);
    console.log(this.isLoged)
  }
}
