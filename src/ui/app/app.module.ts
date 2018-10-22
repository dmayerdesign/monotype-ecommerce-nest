import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { WINDOW } from '@mte/common/constants/angular/injection-tokens'
import { TransferHttpCacheModule } from '@nguniversal/common'
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { HomeComponent } from './components/home/home.component'
import { MteFormsModule } from './modules/forms'
import { MteHttpModule } from './modules/http'
import { MteUiModule } from './modules/ui'

// For AoT:
export function getWindow(): Window {
  return window
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MteUiModule,
    MteHttpModule,
    MteFormsModule
  ],
  providers: [
    {
      provide: WINDOW,
      useFactory: getWindow,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
