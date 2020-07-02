import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogoCadPage } from './jogo-cad.page';

describe('JogoCadPage', () => {
  let component: JogoCadPage;
  let fixture: ComponentFixture<JogoCadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoCadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogoCadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
