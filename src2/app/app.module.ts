import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import{HttpClient,HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SearchComponent } from './search/search.component';
import { FectchOperatorComponent } from './fectch-operator/fectch-operator.component';
import { from } from 'rxjs';
import { ShowToursComponent } from './show-tours/show-tours.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LoginformComponent,
    SearchComponent,
    FectchOperatorComponent,
    ShowToursComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
