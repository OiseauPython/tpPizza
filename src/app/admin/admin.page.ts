import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {PizzaService} from "../services/pizza.service";

class pizza {
}

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss']
})
export class AdminPage implements OnInit {

  @Input() pizzaName: string;
  @Input() pizzaPhoto: string;
  @Input() pizzaPrice: number;
  @Input() pizzaIngredients: string;
  @Input() index: number;
  @Input() id: number;
  @Output() productAdded = new EventEmitter();
  pizzas: pizza[];
  pizzasSubscription: Subscription;
  authStatus: boolean;


  constructor(private authService: AuthService,
              private router: Router,
              private pizzaService: PizzaService
  ) {}

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    this.pizzaService.getPizza();
    this.pizzasSubscription = this.pizzaService.pizzasSubject.subscribe(
        (pizzas: pizza[]) => {
          this.pizzas = pizzas;
        }
    );
    this.pizzaService.emitPizzaSubject();
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['']);
  }

}
