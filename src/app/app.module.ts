import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/**
 * Os erros eram causados por causa de versão
 */
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
