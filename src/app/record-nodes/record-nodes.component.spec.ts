import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordNodesComponent } from './record-nodes.component';

describe('RecordNodesComponent', () => {
  let component: RecordNodesComponent;
  let fixture: ComponentFixture<RecordNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
