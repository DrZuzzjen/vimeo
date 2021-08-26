import { Component, OnInit } from '@angular/core';
import { Ejercicios, Preferencias } from './rutina.interface';
import { rutinas } from './rutinas';
import { HttpClient,HttpHeaders } from '@angular/common/http';


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
    const preferenciaZona: string | any = this.preferencias.zona;
    const preferenciaNivel: number | any = this.preferencias.numero;
    //Filtar por zona
    const found = rutinas.filter(item => item.zona.indexOf(preferenciaZona) !== -1)
    //Filtar resultado por nivel
    const nivelOk = found.filter(item => item.numero.toString().indexOf(preferenciaNivel) !== -1)
    //Extraer codigos de playlist
    const playlistCode = nivelOk.map(item => item.codigo)
    console.log('Preferencia de Usuario: ' ,this.preferencias.zona , '/ Nivel: ' , this.preferencias.numero )
    console.log('Se encontraron: ', found.length, ' rutinas con la zona', preferenciaZona)
    console.log(found)
    console.log(`Se encontraron ${nivelOk.length} rutinas ${preferenciaZona} con el nivel ${preferenciaNivel}` )
    playlistCode.forEach(item => console.log('Video: ', item))

    return playlistCode


  }

  generarPlaylist() {

  }

  conectarseAVimeo() {

    const token = '11a90bb6da5f1066dc82249cb8ad468f'

    const configUrl = {
      headers: new HttpHeaders({ 

        'Authorization': 'Basic MDJiYjlhNWVmYjBhYTdkMzcxNDQxYzI2YzdjMjhlYjI2MzM2MGY5MzpRT0xkZlluZFBOcVZrZkxQcmgxL3BoSUYyNFZxQlJJeDZmVXJGY3FoUFlCV2xiaXNmVk43S2Q4MzluN3J2TytYQW1VRmYyblZYS1p5NjJtNHZLdThRb3BwSWxIaStJaitBWWNWMjR1OWhxY283cGEwaXg4aTFIMWZHVS9OdXFqeQ==',
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.vimeo.*+json;version=3.4'
      })
    }
    
    const body = {
      'grant_type': 'client_credentials',
      'scope': 'public'
    };
    const url = 'https://api.vimeo.com/oauth/authorize/client'

    //Metodo post para pedir token
    this.http.post<any>(url, body, configUrl)
    .subscribe(data => {
        console.log(data)
    })
  }
  //Inyectamos el servicio
  constructor(private http: HttpClient) { }
  
}