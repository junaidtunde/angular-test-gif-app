import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgRedux, NgReduxModule } from "@angular-redux/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchFieldComponent } from "./search-field/search-field.component";
import { ResultsListComponent } from "./results-list/results-list.component";
import { HomeComponent } from "./components/home/home.component";
import { DetailsComponent } from "./components/details/details.component";

import { IAppState, rootReducer, INITIAL_STATE } from "./redux-store/store";

@NgModule({
    declarations: [
        AppComponent,
        SearchFieldComponent,
        ResultsListComponent,
        DetailsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgReduxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
