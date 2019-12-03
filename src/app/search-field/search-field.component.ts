import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DataService } from "src/app/services/data.service";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../store";
import { ADD_GIFS } from "../actions";

@Component({
    selector: "app-search-field",
    // selector: 'app-root',
    templateUrl: "./search-field.component.html",
    styleUrls: ["./search-field.component.css"]
})
export class SearchFieldComponent implements OnInit {
    searchGIf: FormGroup;
    disable = false;
    // name = "Search Field";
    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private ngRedux: NgRedux<IAppState>
    ) {}

    ngOnInit() {
        this.searchGIf = this.formBuilder.group({
            search: [""]
        });
    }

    get f() {
        return this.searchGIf.controls;
    }

    apiSearch() {
        this.disable = true;
        this.dataService.searhGiphy(this.f.search.value).subscribe(
            res => {
                this.ngRedux.dispatch({ type: ADD_GIFS, gifs: res["data"] });
                this.disable = false;
            },
            err => {
                console.log(err);
                this.disable = false;
            }
        );
    }
}
