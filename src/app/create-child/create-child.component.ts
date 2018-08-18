import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { Child } from '../child';
import { Father } from '../father'

@Component({
  selector: 'app-create-child',
  templateUrl: './create-child.component.html',
  styleUrls: ['./create-child.component.css']
})
export class CreateChildComponent implements OnInit {

  child: Child = new Child();
  children: Child [] = [];
  selectedFather: Father = new Father();
  selectedChildrens: Child []= [];
  submitted = false;
  constructor(private familyService: FamilyService) {
    this.familyService.clearChilds();
  }

  ngOnInit() {
  }

  createChild(): void{
    this.familyService.setChild(this.child);
    this.selectedChildrens.push(this.child);
    this.newChild();
  }

  sendData(): void{
    this.selectedFather = this.familyService.father;
     document.getElementById('family').style.display = "";
    this.familyService.sendData();
  }

  newChild(): void{
    this.child = new Child();
  }

  validateInput(): void{
    if (this.child.firstName==null || this.child.firstName=="", this.child.secondName==null || this.child.secondName=="",
    this.child.pesel==null || this.child.pesel=="",this.child.birthDate==null || this.child.birthDate=="",
    this.child.gender==null || this.child.gender==""){
        alert("Należy wypełnić wszystkie pola");
    }
    else {
      if(this.child.pesel.length != 11){
        alert("PESEL musi składać się z 11 cyfr")
      }
    else {
      this.createChild();
    }
  }
}
}
