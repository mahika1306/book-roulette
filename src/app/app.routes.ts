import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Main } from './components/main/main';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
     {
        path: 'main',
        component: Main
    }
];
