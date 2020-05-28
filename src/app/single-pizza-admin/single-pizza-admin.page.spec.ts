import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglePizzaAdminPage } from './single-pizza-admin.page';

describe('SinglePizzaAdminPage', () => {
  let component: SinglePizzaAdminPage;
  let fixture: ComponentFixture<SinglePizzaAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePizzaAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePizzaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
