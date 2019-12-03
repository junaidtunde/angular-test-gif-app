import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { DetailsComponent } from "./components/details/details.component";

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "details", component: DetailsComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
