import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP_OPTIONS, URL_SERVICIOS } from 'src/app/shared/commons/config';
import { 
  GetUserDTO,
  NewClientDTO,
  EditPersonDTO,
  UpdateEmailDTO,
  UpdateNamesDTO,
  UpdatePhoneDTO
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

  public newClient = (form: NewClientDTO) => 
    this.http.post(`${this.users}registerUser`, form, HTTP_OPTIONS);
  
  public updatePhone = (form: UpdatePhoneDTO) => 
    this.http.put(`${this.users}update/phone`, form, HTTP_OPTIONS)
  
  public updateNames = (form: UpdateNamesDTO) => 
    this.http.put(`${this.users}update/names`, form, HTTP_OPTIONS)

  public updateEmail = (form: UpdateEmailDTO) => 
    this.http.put(`${this.users}update/email`, form, HTTP_OPTIONS)
  
  public getClientById = (id: string) => 
    this.http.get<GetUserDTO>(`${this.users}getUsers/${id}`)

  public getClientByEmail = (email: string) =>
    this.http.get<GetUserDTO>(`${this.users}getUserByEmail/${email}`)
}
