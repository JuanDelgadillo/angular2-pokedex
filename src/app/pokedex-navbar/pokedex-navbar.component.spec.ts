import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexNavbarComponent } from './pokedex-navbar.component';

describe('PokedexNavbarComponent', () => {
  let component: PokedexNavbarComponent;
  let fixture: ComponentFixture<PokedexNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
