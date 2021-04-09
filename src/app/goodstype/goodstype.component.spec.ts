import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodstypeComponent } from './goodstype.component';

describe('GoodstypeComponent', () => {
  let component: GoodstypeComponent;
  let fixture: ComponentFixture<GoodstypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodstypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
