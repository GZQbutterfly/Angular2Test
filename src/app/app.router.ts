import {Routes} from '@angular/router';

import {ListComponent} from './list';
import {CollectionComponent} from './collection';
import {DetailComponent} from './detail';
import {EditComponent} from './edit';

// ==>
export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
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
    }
];
