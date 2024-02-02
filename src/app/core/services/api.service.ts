import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IDetailsResponse, IListResponseInterface } from "../interfaces/response.interface";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private HTTP: HttpClient) { }

  getDataFromServer<TResponse extends object = IListResponseInterface>(
    end_point: string
  ) {
    return this.HTTP.get<TResponse>(end_point);
  }


  getDataFromServerById<TResponse extends object = IDetailsResponse>(
    end_point: string,
    id: number,
  ) {
    return this.HTTP.get<TResponse>(end_point + id);
  }

}
