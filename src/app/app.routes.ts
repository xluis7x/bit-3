import { Routes } from '@angular/router';
import { Api } from './pages/api/api';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { ContactUs } from './pages/contact-us/contact-us';

export const routes: Routes = [

    {
        path: 'api',
        component: Api,
        title: 'Discover | Harry Potter World',
    },
    {
        path: 'contactUs',
        component: ContactUs,
        title: 'Contact Us | Harry Potter World'
    },
    {
        path: 'home',
        component: Home,
        title: 'Home | Harry Potter World',
    },
    {
        path: "",
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFound,
        title: 'Error 404 | Not Found',
    },
];
