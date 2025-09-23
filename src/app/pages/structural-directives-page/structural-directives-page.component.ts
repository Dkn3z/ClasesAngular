import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives-page',
  standalone: true,
  imports: [],
  templateUrl: './structural-directives-page.component.html',
})
export class StructuralDirectivesPageComponent { 
 // if
  isVisible = signal(true);

  toggleVisibility(){
    this.isVisible.update(v => !v);
  }

// switch

viewMode = signal<'none'| 'list' | 'grid'>('none');

setViewMode(mode : 'none' | 'list' | 'grid'){
  this.viewMode.set(mode);
}

// for

users = signal ([
  {id : 1, name : 'Yuta', role : 'Especial'},
  {id : 2, name : 'Toji', role : 'Atadura'},
  {id : 3, name : 'Maki', role : 'Atadura'},
]);

}
