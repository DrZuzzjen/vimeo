import { Component, OnInit } from '@angular/core';
import { Ejercicios, Preferencias } from './rutina.interface';
import { rutinas } from './rutinas';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})

export class RutinaComponent {

  rutinas = rutinas;
  match: string = 'Frente';

  preferencias: Ejercicios = {
    /*  zona: ["Frente" ,"Ojos", "Cuello"], */
    id: 0,
    zona: 'Frente',
    numero: 1,
    modelo: '',
    codigo: '1',
 
  };
  //Buscar datos preferencias de usuario
  buscarRutina() {
    //Buscar datos preferencias de usuario dentro de las rutinas
    const preferenciaZona :string | any = this.preferencias.zona;
    const preferenciaNivel :number | any = this.preferencias.numero;
    
    const found = rutinas.filter(item => item.zona.indexOf(preferenciaZona) !== -1 )
    const nivelOk = found.filter(item => item.numero.toString().indexOf(preferenciaNivel) !== -1 )
    
      console.log('Se encontraron: ',found.length ,' rutinas')
      console.log(found)
      console.log(nivelOk)
      


     
    }
    
  }