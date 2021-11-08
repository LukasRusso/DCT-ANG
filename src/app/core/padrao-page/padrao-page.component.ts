import { Component, OnInit } from '@angular/core';
import { SiteModule } from '../../site/site.module';
import { fromEventPattern } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-padrao-page',
  templateUrl: './padrao-page.component.html',
  styleUrls: ['./padrao-page.component.scss'],
})
export class PadraoPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
  handleNavigation(evento: string) {
    console.log(evento)
    this.route.navigateByUrl('/'+evento);
  }
}