import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ResumeContentComponent } from './resume-content/resume-content.component';
import { PortfolioContentComponent } from './portfolio-content/portfolio-content.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'resume', component: ResumeContentComponent },
  { path: 'portfolio', component: PortfolioContentComponent },
  { path: 'blog', component: BlogContentComponent },
  { path: 'contact', component: ContactContentComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InfoPanelComponent,
    MainContentComponent,
    HomeContentComponent,
    ResumeContentComponent,
    PortfolioContentComponent,
    BlogContentComponent,
    ContactContentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
