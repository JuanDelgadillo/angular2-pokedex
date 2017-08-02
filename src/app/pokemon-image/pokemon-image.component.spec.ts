import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonImageComponent } from './pokemon-image.component';

describe('PokemonImageComponent', () => {
  let component: PokemonImageComponent;
  let fixture: ComponentFixture<PokemonImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
