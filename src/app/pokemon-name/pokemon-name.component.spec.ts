import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNameComponent } from './pokemon-name.component';

describe('PokemonNameComponent', () => {
  let component: PokemonNameComponent;
  let fixture: ComponentFixture<PokemonNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
