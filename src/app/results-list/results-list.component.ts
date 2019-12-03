import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store";
import { GIF_DETAILS } from "../actions";

@Component({
    selector: "app-results-list",
    templateUrl: "./results-list.component.html",
    styleUrls: ["./results-list.component.css"]
})
export class ResultsListComponent implements OnInit {
    @select() gifs;
    constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {}

    ngOnInit() {}

    gifDetails(gif) {
        this.ngRedux.dispatch({ type: GIF_DETAILS, gif });
        this.router.navigate(["/details"]);
    }
}
