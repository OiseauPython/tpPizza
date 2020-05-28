import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../services/pizza.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../services/cart.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-pizza-detail-admin',
  templateUrl: './pizza-detail-admin.page.html',
  styleUrls: ['./pizza-detail-admin.page.scss'],
})
export class PizzaDetailAdminPage implements OnInit {

  id: string = 'Id';
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
              private cartService: CartService,
              public alertController: AlertController) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = this.pizzaService.getPizzaById(+id).id;
    this.nom = this.pizzaService.getPizzaById(+id).nom;
    this.photo = this.pizzaService.getPizzaById(+id).photo;
    this.status = this.pizzaService.getPizzaById(+id).status;
    this.ingredients = this.pizzaService.getPizzaById(+id).ingredients;
    this.prix = this.pizzaService.getPizzaById(+id).prix;
    this.cart = this.cartService.getCart();
  }

  async showConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Vous êtes vraiment certain ?',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Euh... Boaf',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Osef vas-y',
          handler: () => {
            console.log('Confirm Okay');
            this.deletePizza(this.id);
          }
        }
      ]
    });

    await alert.present();
  }

  deletePizza(id) {
    this.pizzaService.deletePizza(id);
    this.pizzaService.getPizza();
    console.log("pizza deleted");
  }

}
