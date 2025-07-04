import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CasesComponent } from './features/cases/cases.component';
import { DrivesComponent } from './features/drives/drives.component';
import { HeroComponent } from './features/hero/hero.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { CtaComponent } from './features/cta/cta.component';

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    DrivesComponent,
    HeroComponent,
    PortfolioComponent,
    CtaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
