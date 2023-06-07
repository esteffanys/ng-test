import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiseService {
private usuarios:{id:number,name:string}[];
  constructor() {
    this.usuarios=[
      {id:1,name: 'joão'},
      {id:2,name: 'Maria'},
      {id:3,name: 'Pedro'}
    ];
  }

getUserById(id: number):{ id:number,name: string} | undefined{
  return this.usuarios.find(user => user.id ===id );
 }
}
