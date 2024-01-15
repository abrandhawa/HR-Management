import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmplooyeComponent } from './new-emplooye.component';

describe('NewEmplooyeComponent', () => {
  let component: NewEmplooyeComponent;
  let fixture: ComponentFixture<NewEmplooyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEmplooyeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEmplooyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
