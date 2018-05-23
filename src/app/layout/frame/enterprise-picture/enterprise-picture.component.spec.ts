import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisePictureComponent } from './enterprise-picture.component';

describe('EnterprisePictureComponent', () => {
  let component: EnterprisePictureComponent;
  let fixture: ComponentFixture<EnterprisePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterprisePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterprisePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
