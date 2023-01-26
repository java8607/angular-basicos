import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void{
    console.log('Borrando...');
    //this.heroes.splice(0,1);
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }


  constructor(){
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
