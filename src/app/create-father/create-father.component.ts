import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { Father } from '../father';

@Component({
  selector: 'app-create-father',
  templateUrl: './create-father.component.html',
  styleUrls: ['./create-father.component.css']
})
export class CreateFatherComponent implements OnInit {

  father: Father = new Father();

  createFather(): void{
    this.familyService.setFather(this.father);
  }

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
  }

  validateForm(): void{
    if (this.father.firstName==null || this.father.firstName=="", this.father.secondName==null || this.father.secondName=="",
    this.father.pesel==null || this.father.pesel=="",this.father.birthDate==null || this.father.birthDate==""){
        alert("Należy wypełnić wszystkie pola");
    }
    else {
      this.createFather();
      window.location.href = "http://localhost:4200/family/createChild";
    }
  }

}
