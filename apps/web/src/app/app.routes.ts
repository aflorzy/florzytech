import { Route } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Faq } from './pages/faq/faq';

export const appRoutes: Route[] = [
	{ path: '', component: Home },
	{ path: 'about', component: About },
	{ path: 'contact', component: Contact },
	{ path: 'faq', component: Faq },
];
