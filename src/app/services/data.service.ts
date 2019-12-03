import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class DataService {
    baseUrl = "http://api.giphy.com/v1/gifs/search?api_key=";
    apiKey: string = environment.api_key;
    otherQuery = "&limit=25&lang=en";
    apiUrl: string;
    httpOptions: any;

    constructor(private http: HttpClient) {
        this.apiUrl = this.baseUrl + this.apiKey + "&q=";
    }

    searhGiphy(searchQuery: string) {
        return this.http.get(this.apiUrl + searchQuery + this.otherQuery);
    }
}
