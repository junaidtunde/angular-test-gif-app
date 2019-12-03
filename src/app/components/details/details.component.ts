import { Component, OnInit } from "@angular/core";
import { select } from "@angular-redux/store";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
    @select() gif;
    constructor() {}

    ngOnInit() {}
}
