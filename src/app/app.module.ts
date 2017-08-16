import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {rootRouterConfig} from './app.router.ts';
import {AppComponent} from './app.component.ts';


import {ListComponent, ListItemComponent} from './list';
import {CollectionComponent} from './collection';
import {DetailComponent} from './detail';
import {EditComponent} from './edit';


import {ContactService, UtilService, FooterComponent, HeaderComponent, PhonePipe, BtnClickDirective} from './shared';




@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        ListItemComponent,
        DetailComponent,
        CollectionComponent,
        EditComponent,
        HeaderComponent, FooterComponent,
        PhonePipe, BtnClickDirective
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(rootRouterConfig)
    ],
    providers: [
      ContactService,
      UtilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
















//
// import {NgModule} from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';
// import {AppComponent} from './demo/app.component.ts';
//
// @NgModule({
//     declarations: [AppComponent],
//     imports: [BrowserModule],
//     bootstrap: [AppComponent]
// })
// export class AppModule { }
// NgModule 定义模块用的装饰器
// declarations 导入模块依赖的组件、指令等
// imports 导入所需模块
// bootstrap 标记导出组件，在angular启动是，将被标记的组件渲染到模版中
