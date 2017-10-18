import {Component, OnInit, Input} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import './menu.component.less';


@Component({
    selector: 'menu-ui',
    templateUrl: 'src/app/menu/menu.component.html'
})
export class MenuComponent implements OnInit {
    @Input() menus: Object[];
    currentPath: string = '';
    constructor(private _router: Router) {

    }
    ngOnInit() {

    }
    linkTo(event: any, menu: any) {
        // 取消默认点击事件
        event.preventDefault(false);
        if (this.currentPath === menu.path) {
            //当前地址相同
            return;
        }
        if (!menu.nodes || !menu.nodes.length) {
            // 路由跳转
            this.currentPath = menu.path;
            this._router.navigate([menu.path]);
        } else {
            let childrenUl = event.target.nextElementSibling.nextElementSibling;
            let method = childrenUl.classList.contains('menu-items-hide') ? 'remove' : 'add';
            childrenUl.classList[method]('menu-items-hide');
        }
    }
}

// 1.this.router.navigate(['user', 1]);
// 以根路由为起点跳转
//
// 2.this.router.navigate(['user', 1],{relativeTo: route});
// 默认值为根路由，设置后相对当前路由跳转，route是ActivatedRoute的实例，使用需要导入ActivatedRoute
//
// 3.this.router.navigate(['user', 1],{ queryParams: { id: 1 } });
// 路由中传参数 /user/1?id=1
//
// 4.this.router.navigate(['view', 1], { preserveQueryParams: true });
// 默认值为false，设为true，保留之前路由中的查询参数/user?id=1 to /view?id=1
//
// 5.this.router.navigate(['user', 1],{ fragment: 'top' });
// 路由中锚点跳转 /user/1#top
//
// 6.this.router.navigate(['/view'], { preserveFragment: true });
// 默认值为false，设为true，保留之前路由中的锚点/user/1#top to /view#top
//
// 7.this.router.navigate(['/user',1], { skipLocationChange: true });
// 默认值为false，设为true路由跳转时浏览器中的url会保持不变，但是传入的参数依然有效
//
// 8.this.router.navigate(['/user',1], { replaceUrl: true });
// 未设置时默认为true，设置为false路由不会进行跳转
