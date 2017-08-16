import './polyfills.ts';
import './vendor.ts';



import './index.less';
import 'reflect-metadata';
import 'zone.js';




import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module.ts';


platformBrowserDynamic().bootstrapModule(AppModule).catch(err=>console.error(err));
