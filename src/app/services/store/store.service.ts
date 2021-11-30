import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP_OPTIONS, URL_SERVICIOS } from 'src/app/shared/commons/config';
import { 
  GetStockByCategoryDTO,
  GetCategoryDTO
} from 'src/app/dtos/dtos.module';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  store: string = `${URL_SERVICIOS}store/`

  constructor(
    private http: HttpClient
  ) { }

  public getProductsByCategory = (category: string) => 
    this.http.get<GetStockByCategoryDTO[]>(`${this.store}getStock/category/${category}`)
  
  public getCategorys = () => 
    this.http.get<GetCategoryDTO[]>(`${this.store}getCategory`)
  
}
