import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityExplorerComponent } from './city-explorer.component';

describe('CityExplorerComponent', () => {
  let component: CityExplorerComponent;
  let fixture: ComponentFixture<CityExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
