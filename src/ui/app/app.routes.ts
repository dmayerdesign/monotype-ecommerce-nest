import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'speakers', loadChildren: './modules/speakers/speakers.module#SpeakersModule'},
]
