import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP_OPTIONS, URL_SERVICIOS } from 'src/app/shared/commons/config';
import { 
  GetUserListDTO,
  GetUserDTO
} from 'src/app/dtos/dtos.module';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  users: string = `${URL_SERVICIOS}users/`;

  constructor(
    private http: HttpClient
  ) { }

  public getClients = () => 
    this.http.get<GetUserDTO[]>(`${this.users}getUsers`)

  public newClient = (form: any) => 
    this.http.post<any>(`${this.users}registerUser`, form, HTTP_OPTIONS);
}
