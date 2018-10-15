import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { TransferHttpCacheModule } from '@nguniversal/common'
import { WINDOW } from '../../../belongs-in-common/injection-tokens'
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { HomeComponent } from './components/home/home.component'
import { UniversalInterceptorService } from './services/universal-interceptor.service'

// For AoT compilation:
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
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: UniversalInterceptorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }