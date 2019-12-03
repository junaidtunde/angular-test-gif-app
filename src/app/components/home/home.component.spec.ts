import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgReduxModule } from "@angular-redux/store";
import { RouterTestingModule } from "@angular/router/testing";
import { DataService } from "src/app/services/data.service";

import { HomeComponent } from "./home.component";
import { SearchFieldComponent } from "./../../search-field/search-field.component";
import { ResultsListComponent } from "./../../results-list/results-list.component";

describe("HomeComponent", () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                SearchFieldComponent,
                ResultsListComponent
            ],
            imports: [
                ReactiveFormsModule,
                HttpClientModule,
                NgReduxModule,
                RouterTestingModule
            ],
            providers: [DataService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
