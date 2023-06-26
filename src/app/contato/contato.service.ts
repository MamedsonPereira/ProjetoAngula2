import { Injectable } from '@angular/core';

//ANGULAR FIRE
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/compat/database';

import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  listaContatosRef: AngularFireList<Contato>;
  contatoRef: AngularFireObject<Contato>;

  constructor(private db: AngularFireDatabase) {
    this.listaContatosRef = this.db.list('list-contato');
    this.contatoRef = this.db.object('list-contato/' + 0);
  }

  //CREATE RUD
  insertContato(contato: Contato){
    this.listaContatosRef.push(
      {
        jogo: contato.jogo,
        lancamento: contato.lancamento,
        desenvolvedora: contato.desenvolvedora
      }
    );
  }

  //C Read UD
  getContatoById(id: string): AngularFireObject<Contato> {
    this.contatoRef = this.db.object('list-contato/'+ id);
    return this.contatoRef;
  }

  getContatoList(): AngularFireList<Contato> {
    return this.listaContatosRef;
  }

  //CR Update D
  updateContato(contato: Contato){
    this.contatoRef.update({
      jogo: contato.jogo,
      lancamento: contato.lancamento,
      desenvolvedora: contato.desenvolvedora
    });
  }

  //CRU Delete
  deleteContato(id: String) {
    this.contatoRef = this.db.object('list-contato/' + id);
    this.contatoRef.remove();
  }

}
