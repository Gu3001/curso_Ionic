import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-refresher',
  templateUrl: './component-refresher.page.html',
  styleUrls: ['./component-refresher.page.scss'],
})
export class ComponentRefresherPage implements OnInit {

  message : string = 'Puxe para baixo para obter novas informações';
  constructor() { }

  ngOnInit() {
  }

  atualizarMensagem(event: any){
    setTimeout(()=>{
      this.message = 'Parabéns, você aprendeu a usar o componente Refresher';
      event.taget.complete();
    }, 2000)
  }

}
