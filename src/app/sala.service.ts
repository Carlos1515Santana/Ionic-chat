import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class SalaService {
    constructor(private db:AngularFireDatabase){

    }

    icones = [
        'bluetooth',
        'walk',
        'send',
        'return-left',
        'remove',
        'play',
        'logo-euro',
        'egg',
        'logo-android',
        'arrow-round-back',
        'add'
    ];

    salas = [
        {
            id: '1',
            nome: 'Jogos',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'A',
                },
                texto: 'Bem-vindo a sala'
            }],
            usuarios: []
        },
        {
            id: '2',
            nome: 'Teatro',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'B',
                },
                texto: 'Bem-vindo a sala'
            }],
            usuarios: []
        },
        {
            id: '3',
            nome: 'Esportes',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'C'
                },
                texto: 'Bem-vindo a sala'
            }],
            usuarios: []
        }
    ];

    nomeNaSala(nome, sala) {
        let a = this.salas[sala.id].usuarios.some(e => e.nome == nome);
        console.log(a)
        return a;
    }

    addMensagem(usuario, texto, sala){
        this.db.list("/salas/" + sala.$key + "/mensagens/").push({
            usuario: usuario,
            texto: texto
        });
    }

    addUsuario(usuario, sala){
        this.db.list("/salas/" + sala.$key + "/usuarios/").push(usuario);
    }


}
