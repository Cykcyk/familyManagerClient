import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateChildComponent } from './create-child/create-child.component';
import { CreateFatherComponent } from './create-father/create-father.component';
import { FathersListComponent } from './fathers-list/fathers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFatherComponent,
    CreateChildComponent,
    FathersListComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
