import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PizzaService} from "../services/pizza.service";
import {Router} from "@angular/router";
import { Pizza } from '../models/Pizza.model';


@Component({
    selector: 'app-admin-form',
    templateUrl: './admin-form.page.html',
    styleUrls: ['./admin-form.page.scss'],
})
export class AdminFormPage implements OnInit {

    userForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private pizzaService: PizzaService,
                private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.userForm = this.formBuilder.group({
            nom: '',
            prix: '',
            ingredients: [],
            photo: ''
        });
    }

    onSubmitForm() {
        const formValue = this.userForm.value;
        const newPizza = new Pizza(
            formValue['nom'],
            formValue['prix'],
            formValue['ingredients'],
            formValue['photo']
        );
        this.pizzaService.addPizza(newPizza);
        this.router.navigate(['/tabs/admin']);
        this.pizzaService.getPizza();
    }

}
