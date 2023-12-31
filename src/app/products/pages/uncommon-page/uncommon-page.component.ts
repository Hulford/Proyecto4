import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Hulford';
  public gender: 'male' | 'female' = 'male';
 public invitationMap = {
  'male': 'invitarlo',
  'female': 'invitarla'
 }
  changeClient():void{
    this.name= 'melissa';
    this.gender= 'female';
  }

  // i18nPlural
  public clients: string[] = ['maria','pedro','fernando','hernando','eduardo','melissa','natalia' ];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other':'Tenemos # clientes esperando'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  // slicepipe

  // KeyValue Pipe
  public person = {
    name: 'Hulford',
    age: 17,
    address: 'Ottawa, Canada'

  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(()=> {
      resolve('Tenemos data en la promesa.')
      console.log('Tenemos data en la promesa');
      this.person.name ='Otro nombre'
    }, 3500);
  })
}
