import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { BylawsComponent } from './components/bylaws/bylaws.component';
import { OfficersComponent } from './components/officers/officers.component';

const routes: Routes = [
  {'path': '', 'redirectTo': '/contact', 'pathMatch': 'full'},
  {'path': 'contact', 'component': ContactComponent},
  {'path': 'bylaws', 'component': BylawsComponent},
  {'path': 'officers', 'component': OfficersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    ContactComponent,
    BylawsComponent,
    OfficersComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
