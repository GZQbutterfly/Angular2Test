import {Routes} from '@angular/router';

import {ListComponent} from './list';
import {CollectionComponent} from './collection';
import {DetailComponent} from './detail';
import {EditComponent} from './edit';
import {HomeComponent} from './home';
import * as FormComponent from './form';
import {NotFoundComponent} from './404.component.ts';
// ==>
export const rootRouterConfig: Routes = [
    {
        path: '',
        component: HomeComponent
        // redirectTo: 'list',
        // pathMatch: 'full'
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    }, {
        path: 'edit',
        component: EditComponent
    }, {
        path: 'edit/:id',
        component: EditComponent
    }, {
        path: 'collection',
        component: CollectionComponent
    },
    {
        path: 'forms',
        children: [
            { path: 'button',component: FormComponent.ButtonComponent },
            { path: 'text' ,component: FormComponent.InputComponent},
            { path: 'select' },
        ]
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];
