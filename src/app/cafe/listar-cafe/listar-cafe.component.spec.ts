/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarCafeComponent } from './listar-cafe.component';
import { CafeService } from '../cafe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { faker } from '@faker-js/faker';
import { Cafe } from 'src/app/models/cafe';


describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ListarCafeComponent ],
      providers:[CafeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const cafe = new Cafe();
      cafe.altura  =faker.datatype.number({min:100,  max:5000});
      cafe.id ==faker.datatype.number({min:100,  max:115});
      cafe.imagen  =faker.image.nature();
      cafe.nombre  = faker.name.jobType();
      cafe.tipo = "Blend";
      cafe.sabor = faker.random.word();
      component.listadoCafe.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should have table   <table> elements', () => {
    expect(debug.queryAll(By.css('table'))).toBeTruthy()
  });


  it('should have 3  <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });


});
