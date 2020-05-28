import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PizzaService} from "../services/pizza.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.page.html',
  styleUrls: ['./pizza-detail.page.scss'],
})

export class PizzaDetailPage implements OnInit {

  nom: string = 'Pizza';
  photo: string = 'Photo';
  status: string = 'Statut';
  ingredients: string = 'Ingredients';
  prix: string = 'Prix';

  cart = [];
  items = [];

  constructor(private pizzaService: PizzaService,
              private route: ActivatedRoute,
              private router: Router,
              private cartService: CartService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.nom = this.pizzaService.getPizzaById(+id).nom;
    this.photo = this.pizzaService.getPizzaById(+id).photo;
    this.status = this.pizzaService.getPizzaById(+id).status;
    this.ingredients = this.pizzaService.getPizzaById(+id).ingredients;
    this.prix = this.pizzaService.getPizzaById(+id).prix;
  }

  addToCart(pizza) {
    this.cartService.addProduct(pizza);
    console.log("addToCart");
  }

  openCart() {
    this.router.navigate(['cart']);
  }

}
