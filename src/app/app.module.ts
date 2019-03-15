import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {PersonComponent} from './person/person.component'
import {PersonDetailComponent} from './person-detail/person-detail.component'
import {PersonAddComponent} from './person-add/person-add.component'
import {PersonEditComponent} from './person-edit/person-edit.component'


const appRoutes: Routes = [
  {
    path: 'persons',
    component: PersonComponent,
    data: { title: 'Person List' }
  },
  {
    path: 'person-detail/:id',
    component: PersonDetailComponent,
    data: { title: 'Person Details' }
  },
  {
    path: 'person-add',
    component: PersonAddComponent,
    data: { title: 'Person Add' }
  },
  {
    path: 'person-edit/:id',
    component: PersonEditComponent,
    data: { title: 'Person Edit' }
  },
  { path: '',
    redirectTo: 'persons',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PersonComponent,
    PersonAddComponent,
    PersonDetailComponent,
    PersonEditComponent
    ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
