import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofblogsComponent } from './listofblogs.component';

describe('ListofblogsComponent', () => {
  let component: ListofblogsComponent;
  let fixture: ComponentFixture<ListofblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
