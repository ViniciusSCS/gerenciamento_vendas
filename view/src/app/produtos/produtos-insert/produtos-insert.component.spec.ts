import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosInsertComponent } from './produtos-insert.component';

describe('ProdutosInsertComponent', () => {
  let component: ProdutosInsertComponent;
  let fixture: ComponentFixture<ProdutosInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
