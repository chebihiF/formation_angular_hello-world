import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceseComponent } from './courcese.component';

describe('CourceseComponent', () => {
  let component: CourceseComponent;
  let fixture: ComponentFixture<CourceseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
