import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor']
  heroeBorrado: string | undefined;
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift()
    console.log(this.heroeBorrado)
  }


}
