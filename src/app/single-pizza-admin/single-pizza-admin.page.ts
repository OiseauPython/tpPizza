
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PizzaService} from "../services/pizza.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-single-pizza-admin',
  templateUrl: './single-pizza-admin.page.html',
  styleUrls: ['./single-pizza-admin.page.scss'],
})
export class SinglePizzaAdminPage implements OnInit {


  @Input() pizzaName: string;
  @Input() pizzaPhoto: string;
  @Input() pizzaPrice: number;
  @Input() pizzaIngredients: string;
  @Input() index: number;
  @Input() id: number;
  @Output() productAdded = new EventEmitter();
  pizzas: any[];
  pizzasSubscription: Subscription;

  constructor(private pizzaService: PizzaService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }



  ngOnInit() {
    this.pizzasSubscription = this.pizzaService.pizzasSubject.subscribe(
        (pizzas: any[]) => {
          this.pizzas = pizzas;
        }
    );
  }

}
