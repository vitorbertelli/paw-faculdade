import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSignalComponent } from './message-signal.component';

describe('MessageSignalComponent', () => {
  let component: MessageSignalComponent;
  let fixture: ComponentFixture<MessageSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
