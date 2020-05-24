import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurePage } from './secure.page';

describe('SecurePage', () => {
  let component: SecurePage;
  let fixture: ComponentFixture<SecurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
