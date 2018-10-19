import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { WINDOW } from '@mte/common/constants/angular/injection-tokens'
import { TransferHttpCacheModule } from '@nguniversal/common'
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { HomeComponent } from './components/home/home.component'

// For AoT:
export function getWindow(): Window {
  return window
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: WINDOW,
      useFactory: getWindow
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
