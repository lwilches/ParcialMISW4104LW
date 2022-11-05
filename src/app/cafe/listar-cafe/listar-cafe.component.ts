import { Component, OnInit } from '@angular/core';
import { Cafe } from 'src/app/models/cafe';
import { CafeService } from '../cafe.service';


@Component({
  selector: 'app-listar-cafe',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css']
})
export class ListarCafeComponent implements OnInit {

  listadoCafe :Array<Cafe> = [];

  constructor( private   cafeService : CafeService ) { }

  ngOnInit() {
    this.consultarListaCafe();
  }
  get totalCafeOrigen()
  {
    return this.listadoCafe.filter(c=>c.tipo== "Café de Origen").length
  }

  get totalCafeBlend()
  {
    return this.listadoCafe.filter(c=>c.tipo== "Blend").length
  }

  private consultarListaCafe()
  {
    this.cafeService.getListadoCafe().subscribe(  listado => {
      this.listadoCafe = listado;
    } );
  }


}
