import './index.css';
import 'reflect-metadata';
import 'zone.js';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module.ts';

console.log('main ...');
platformBrowserDynamic().bootstrapModule(AppModule).catch(err=>console.error(err));
