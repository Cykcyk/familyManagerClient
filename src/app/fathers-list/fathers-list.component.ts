import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs'
import { Father } from '../father';
import { Child } from '../child';


@Component({
  selector: 'app-fathers-list',
  templateUrl: './fathers-list.component.html',
  styleUrls: ['./fathers-list.component.css']
})
export class FathersListComponent implements OnInit {

  fathers: Father[] = [];
  children: Child[] = [];
  selectedChildren: Child[] = [];
  selectedFather: Father;
  firstName: string = "";
  secondName: string = "";
  pesel: string = "";
  birthDate: string = "";
  gender: string = "";

  constructor(private familyService: FamilyService) {

   }

  ngOnInit() {
  }

  onSelect(father: Father): void {
    this.selectedFather = father;
    this.children = [];
    this.setSelectedChildren();
  }

  clearLists(){
    this.children = [];
    this.fathers = [];
    this.selectedFather = null;
    this.selectedChildren = [];
  }

  setChilder(data: Data) {
    this.children = data;
    this.familyService.prepareFatherList(this.children).subscribe(data => this.setFatherList(data));
  }

  setFatherList(data: Data) {
    this.fathers = data;
  }

  searchChild(): void {
    this.clearLists();
    this.familyService.searchChild(this.firstName, this.secondName, this.pesel, this.birthDate, this.gender).subscribe(data => this.setChilder(data));
  }

  setSelectedChildren(){
    this.familyService.searchChildById(this.selectedFather.familyId).subscribe(data => this.setSelectedChilder(data));
  }

  setSelectedChilder(data: Data){
    this.selectedChildren = data;
  }
}
