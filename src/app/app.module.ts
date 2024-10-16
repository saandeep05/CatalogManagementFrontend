import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './home/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequesterComponent } from './requester/requester.component';
import { UserDirectComponent } from './user-direct/user-direct.component';
import { AdminComponent } from './admin/admin.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { CreateCatalogComponent } from './admin/create-catalog/create-catalog.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { EditProductComponent } from './admin/view-products/edit-product/edit-product.component';
import { EditCatalogComponent } from './admin/view-products/edit-catalog/edit-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    RequesterComponent,
    UserDirectComponent,
    AdminComponent,
    CreateProductComponent,
    CreateCatalogComponent,
    ViewProductsComponent,
    EditProductComponent,
    EditCatalogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
