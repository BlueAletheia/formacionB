import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [AppComponent, FormComponent, TableComponent],
  imports: [BrowserModule, FormsModule],
  providers: [UsuariosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
