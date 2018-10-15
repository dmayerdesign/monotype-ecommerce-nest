import { Module } from '@nestjs/common'
import { applyDomino, AngularUniversalModule } from '@nestjs/ng-universal'
import { join } from 'path'
import { AppController } from './app.controller'

const BROWSER_DIR = join(process.cwd(), 'dist/browser')
applyDomino(global, join(BROWSER_DIR, 'index.html'))

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('./../../dist/ssr/main.js'),
    }),
  ],
  controllers: [AppController],
})
export class ApplicationModule {}
