import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherDetailChildCompoment } from './child.component';

describe('ChildComponent', () => {
  let component: OtherDetailChildCompoment;
  let fixture: ComponentFixture<OtherDetailChildCompoment>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OtherDetailChildCompoment],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherDetailChildCompoment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
