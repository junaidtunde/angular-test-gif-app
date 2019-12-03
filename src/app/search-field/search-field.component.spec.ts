import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgReduxModule } from "@angular-redux/store";
import { RouterTestingModule } from "@angular/router/testing";
import { DataService } from "src/app/services/data.service";

import { SearchFieldComponent } from "./search-field.component";

describe("SearchFieldComponent", () => {
    let component: SearchFieldComponent;
    let fixture: ComponentFixture<SearchFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchFieldComponent],
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
        fixture = TestBed.createComponent(SearchFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("search field is present and is not null", async(() => {
        const el = fixture.debugElement.nativeElement;
        let SearchField = el.querySelector("input[formControlName=search]");
        expect(SearchField).toBeTruthy();
        expect(SearchField.getAttribute("disabled")).toEqual(null);
    }));
});
