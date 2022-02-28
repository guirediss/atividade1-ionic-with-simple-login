import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.page.html',
  styleUrls: ['./boas-vindas.page.scss'],
})
export class BoasVindasPage implements OnInit {

  

  constructor() { }

  ngOnInit() {
    // redireciona para página home em 5 segundos
    setTimeout(function(){
      window.location.href = "/home";
    }, 5000);
  }

}
