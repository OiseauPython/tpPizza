import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PizzaService} from "../services/pizza.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-Pizza',
    templateUrl: 'Pizza.page.html',
    styleUrls: ['Pizza.page.scss']
})
export class PizzaPage implements OnInit {

    @Input() pizzaName: string;
    @Input() pizzaPhoto: string;
    @Input() pizzaPrice: number;
    @Input() pizzaIngredients: string;
    @Input() index: number;
    @Input() id: number;
    @Output() productAdded = new EventEmitter();

    isAuth = false;
    pizzas: any[];
    data: boolean;
    pizzasSubscription: Subscription;

    constructor(private pizzaService: PizzaService) {}

    ngOnInit() {
        this.pizzaService.getPizza();
        this.pizzasSubscription = this.pizzaService.pizzasSubject.subscribe(
            (pizzas: any[]) => {
                this.pizzas = pizzas;
            }
        );
        this.pizzaService.emitPizzaSubject();

        //On fait semblant d'attendre
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.data = true;
                        resolve(true);
                    }, 3000
                );
            }
        );
    }

    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
            }, 2000
        );
    });

    addProductToCart(product) {
        this.productAdded.emit(product);
    }

    /*onSave() {
        this.pizzaService.savePizza();
    }*/

    onFetch() {
        this.pizzaService.getPizza();
    }

}
