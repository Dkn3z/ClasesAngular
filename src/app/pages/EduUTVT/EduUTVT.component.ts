import { Component, signal } from '@angular/core';
import { ICurse } from '../../core/interfaces/index.ts';

@Component({
  selector: 'app-edu-utvt',
  standalone: true,
  imports: [],
  templateUrl: './EduUTVT.component.html',
})
export class EduUTVTComponent { 

  title = "EdUTVT";
  text_name = signal("");
  text_duracion = signal("");
  text_nivel = signal("");
  text_cuatrimestre = signal("");
  messageError = signal('');
  curses = signal<ICurse[]>([]);
  
 
  editingId = signal<number | null>(null);

  resetCurses(){
    this.text_name.set('');
    this.text_duracion.set('');
    this.text_nivel.set('');
    this.text_cuatrimestre.set('');
    this.messageError.set('');
    this.editingId.set(null); 
  }

  deleteCurse(id: number){
    this.curses.update(curses => curses.filter(curse => curse.id !== id));
   
    if (this.editingId() === id) this.resetCurses();
  }

  addCurse(){  
    if (!this.text_name().trim() || !this.text_duracion().trim() || !this.text_nivel().trim() || !this.text_cuatrimestre().trim()) {
      this.messageError.set('Something is wrong, check the information');
      return;
    } 
    if (this.editingId()) {
      this.curses.update(curses =>
        curses.map(curse =>
          curse.id === this.editingId()
            ? {
                ...curse,
                name: this.text_name(),
                duracion: parseInt(this.text_duracion()),
                nivel: this.text_nivel(),
                cuatrimestre: parseInt(this.text_cuatrimestre())
              }
            : curse
        )
      );
      this.resetCurses();
      return;
    }
    const newCurse: ICurse = {
      id: this.curses().length + 1,
      name: this.text_name(),
      duracion: parseInt(this.text_duracion()),
      nivel: this.text_nivel(),
      cuatrimestre: parseInt(this.text_cuatrimestre()) 
    };

    this.curses.update(curses  => [...curses, newCurse]);
    this.resetCurses();
  }


  updateCurse(id: number){  
    const curseToEdit = this.curses().find(c => c.id === id);
    if (!curseToEdit) return;

    this.text_name.set(curseToEdit.name);
    this.text_duracion.set(curseToEdit.duracion.toString());
    this.text_nivel.set(curseToEdit.nivel);
    this.text_cuatrimestre.set(curseToEdit.cuatrimestre.toString());
    this.editingId.set(id);
  }
}
