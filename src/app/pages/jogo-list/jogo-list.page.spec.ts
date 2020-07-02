import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogoListPage } from './jogo-list.page';

describe('JogoListPage', () => {
  let component: JogoListPage;
  let fixture: ComponentFixture<JogoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
