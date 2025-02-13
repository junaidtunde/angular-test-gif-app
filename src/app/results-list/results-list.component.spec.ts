import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgReduxModule } from "@angular-redux/store";
import { RouterTestingModule } from "@angular/router/testing";
import { DataService } from "src/app/services/data.service";

import { ResultsListComponent } from "./results-list.component";

describe("ResultsListComponent", () => {
    let component: ResultsListComponent;
    let fixture: ComponentFixture<ResultsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultsListComponent],
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
        fixture = TestBed.createComponent(ResultsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a variable called gifs", () => {
        let variable = component.gifs;
        expect(variable).toBeDefined;
        expect(variable).toBeTruthy;
    });

    it("has a valid function called gifDetails", () => {
        var spy = spyOn(component, "gifDetails").and.callThrough();
        expect(component).toBeDefined();
        expect(spy);
        expect(component.gifDetails).toBeDefined;
    });
});
