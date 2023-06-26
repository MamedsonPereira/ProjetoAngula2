import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

import { environment }  from '../environment';
import { ListContatoComponent } from './contato/list-contato/list-contato.component';
import { AddContatoComponent } from './contato/add-contato/add-contato.component';
import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListContatoComponent,
    AddContatoComponent,
    EditContatoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    //MENSAGENS TOAST
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // REACTIVE FORMS
    FormsModule,
    ReactiveFormsModule,
    // PAGINATION
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
