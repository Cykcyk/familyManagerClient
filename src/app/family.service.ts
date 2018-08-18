import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Father } from './father';
import { Child } from './child';
import { Family } from './family';


@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  fatherList: Father[] = [];
  father: Father = new Father();
  children : Child[] = [];
  family: Family = new Family();
  familyId: number = 0;
  familiesIds: number[] = [];

  private familyUrl = 'http://localhost:8080/familyManager/family';
  private fatherUrl = 'http://localhost:8080/familyManager/father';
  private childUrl = 'http://localhost:8080/familyManager/child';


  constructor(private http: HttpClient) { }

  getFamily(id: number): Observable<Object> {
    return this.http.get(`${this.familyUrl}/${id}`);
  }

  setFather(father: Father): void{
    this.father = father;

  }

  setChild(child: Child): void{

    this.children.push(child);
  }

  addChildToFamily(child: Object): Observable<Object> {

    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
      return this.http.post(`${this.childUrl}/`, child, httpOptions).subscribe();
  }

  addFatherToFamily(father: Object): Observable<Object> {

    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(`${this.fatherUrl}`, father, httpOptions).subscribe();
  }

  sendData(): void {

      this.createFamily(this.family);
    }

  createFamily(family: Object): Observable<Long> {
console.log(this.father);
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    return this.http.post(`${this.familyUrl}/`, family, httpOptions).subscribe(
      data => this.checkData(data));
  }

  checkData(data: Data): void{
    this.family.id = data;
    this.father.familyId = data;
    this.addFatherToFamily(this.father);
    for (var i = 0; i < Object.keys(this.children).length; i++){
      this.children[i].familyId = this.family.id;
      this.addChildToFamily(this.children[i]);
    }
    this.clearChilds();
  }

  setFatherList(data: Data): void{

    this.fatherList = data;
  }

  createFathersList(): Father[] {
    return this.fatherList;
  }

  getFather(familyId: number): void {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.get(`${this.fatherUrl}/${familyId}`, httpOptions).subscribe(data => this.addFatherToList(data));
  }

  addFatherToList(data: Data): void{
    this.fatherList.push(data);
  }

  clearFamiliesIds():void{
    this.familiesIds = [];
  }

  prepareFatherList(children: Child[]): Observable<Father[]>{
    this.clearFamiliesIds();
    this.children = children;
    for (var i = 0; i < Object.keys(this.children).length; i++) {
      if (this.familiesIds.indexOf(this.children[i].familyId) === -1) {
        this.familiesIds.push(this.children[i].familyId);
    }
  }
  let headers = new Headers();
  headers.append('Content-Type',  'application/json');
  let params = new HttpParams().set('familiesIds',  this.familiesIds);
  return this.http.get<Father[]>(`${this.fatherUrl}`, { headers: headers, params: params });
  }

 searchChild(firstName: string, secondName: string, pesel: string, birthDate: string, gender:string): Observable<Child[]>{
   let headers = new Headers();
   headers.append('Content-Type',  'application/json');
   let params = new HttpParams().set('firstName',  firstName).set('secondName', secondName).set('pesel', pesel).set('birthDate', birthDate).set('gender', gender);

   return this.http.get<Child[]>(`${this.childUrl}/`, { headers: headers, params: params });
 }

 searchChildById(familyId: number): Observable<Child[]>{
   let headers = new Headers();
   headers.append('Content-Type',  'application/json');
   let params = new HttpParams().set('familyId',  familyId);

   return this.http.get<Child[]>(`${this.childUrl}/`, { headers: headers, params: params });
 }

 clearChilds(): void{
   this.children = [];
 }

}
