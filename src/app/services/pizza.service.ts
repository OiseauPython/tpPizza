import {Observable, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Pizza } from '../models/Pizza.model';

@Injectable()
export class PizzaService {
    pizzasSubject = new Subject<any[]>();
    private pizzas = [];
    private url: string;
    private pizza: Pizza[];

    constructor(private httpClient: HttpClient) {
        this.url = "https://api.ynov.jcatania.io/pizza";
    }

    addPizza(postData: Object) {
        /*this.httpClient
            .put('https://api.ynov.jcatania.io/pizza', this.pizza)
            .subscribe(
                () => {
                    console.log('Enregistrement terminé !');
                },
                (error) => {
                    console.log('Erreur ! : ' + error);
                }
            );*/

        this.httpClient.post(this.url, postData).subscribe(data => {
            console.log(data);
        });
        this.getPizza();
    }


    getPizza() {
        this.httpClient
            .get<any[]>('https://api.ynov.jcatania.io/pizza')
            .subscribe(
                (response) => {
                    this.pizzas = response;
                    console.log(this.pizzas);
                    this.emitPizzaSubject();
                },
                (error) => {
                    console.log('Erreur ! : ' + error);
                }
            );
    }

    deletePizza (id: number) {
        this.httpClient.delete(this.url + "/" + id).subscribe(data => {
            console.log(data);
        });
        this.getPizza();
    }


    /*addPizzas(name: string, ingredients: string) {
        const pizzaObject = {
            id: 0,
            name: '',
            ingredients: ''
        };
        pizzaObject.name = name;
        pizzaObject.ingredients = ingredients;
        pizzaObject.id = this.pizzas[(this.pizzas.length - 1)].id + 1;
        this.pizzas.push(pizzaObject);
        this.emitPizzaSubject();
    }*/

    emitPizzaSubject() {
        this.pizzasSubject.next(this.pizzas.slice());
    }

    getPizzaById(id: number) {
        const pizza = this.pizzas.find(
            (s) => {
                return s.id === id;
            }
        );
        return pizza;
    }


}