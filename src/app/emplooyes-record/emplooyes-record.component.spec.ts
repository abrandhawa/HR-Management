import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplooyesRecordComponent } from './emplooyes-record.component';

describe('EmplooyesRecordComponent', () => {
  let component: EmplooyesRecordComponent;
  let fixture: ComponentFixture<EmplooyesRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplooyesRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmplooyesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
