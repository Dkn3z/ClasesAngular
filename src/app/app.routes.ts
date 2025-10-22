import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { StructuralDirectivesPageComponent } from './pages/structural-directives-page/structural-directives-page.component';
import { AttributeDirectivesPageComponent } from './pages/attribute-directives-page/attribute-directives-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';
import { ServisePageComponent } from './pages/servise-page/servise-page.component';
import { EduUTVTComponent } from './pages/EduUTVT/EduUTVT.component';
import { PIpesPageComponent } from './pages/PIpes-page/PIpes-page.component';
export const routes: Routes = [
    {path : "home", component: HomepageComponent },
    {path : "counter", component: CounterPageComponent },
    {path: 'strutural-directives', component: StructuralDirectivesPageComponent},
    {path: 'data-binding', component: DataBindingPageComponent},
    {path: 'attribute-directives', component: AttributeDirectivesPageComponent},
    {path : "service", component: ServisePageComponent },
    {path : "utvt", component: EduUTVTComponent },
    {path : "pipes", component: PIpesPageComponent },
    {path : "**", redirectTo:"home", pathMatch:'full' },
    
];
