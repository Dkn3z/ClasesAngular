import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
export const routes: Routes = [
    {path : "", component: HomepageComponent },
    {path : "counter", component: CounterPageComponent },
    {path : "**", redirectTo:"" },
];
