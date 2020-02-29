import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CnasAppStatSharedModule } from 'app/shared/shared.module';
import { CnasAppStatCoreModule } from 'app/core/core.module';
import { CnasAppStatAppRoutingModule } from './app-routing.module';
import { CnasAppStatHomeModule } from './home/home.module';
import { CnasAppStatEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CnasAppStatSharedModule,
    CnasAppStatCoreModule,
    CnasAppStatHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CnasAppStatEntityModule,
    CnasAppStatAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class CnasAppStatAppModule {}
