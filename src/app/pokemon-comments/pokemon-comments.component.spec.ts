import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCommentsComponent } from './pokemon-comments.component';

describe('PokemonCommentsComponent', () => {
  let component: PokemonCommentsComponent;
  let fixture: ComponentFixture<PokemonCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
