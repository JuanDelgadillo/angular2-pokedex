import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDataComponent } from './pokemon-data.component';

describe('PokemonDataComponent', () => {
  let component: PokemonDataComponent;
  let fixture: ComponentFixture<PokemonDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
