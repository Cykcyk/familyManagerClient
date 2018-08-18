import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { CreateChildComponent } from './create-child/create-child.component';
import { CreateFatherComponent } from './create-father/create-father.component';
import { FathersListComponent } from './fathers-list/fathers-list.component';

const routes: Routes = [
    { path: 'family/createFather', component: CreateFatherComponent },
    { path: 'family/createChild', component: CreateChildComponent},
    { path: 'family/search', component: FathersListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
