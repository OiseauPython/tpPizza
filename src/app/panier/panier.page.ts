import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";

@Component({
    selector: 'app-panier',
    templateUrl: 'panier.page.html',
    styleUrls: ['panier.page.scss']
})
export class PanierPage implements OnInit{

    selectedItems = [];

    total = 0;
    test;

    constructor(private cartService: CartService) { }

    ngOnInit() {
        let items = this.cartService.getCart();
        let selected = {};
        console.log("items : " + this.cartService.getCart());
        for (let obj of items) {
            if (selected[obj.id]) {
                selected[obj.id].count++;
                console.log("selected : " + selected[obj.id]);
            } else {
                selected[obj.id] = {...obj, count: 1};
                console.log("selected else : " + selected[obj.id]);
            }
        }
        this.selectedItems = Object.keys(selected).map(key => selected[key])
        console.log("selected item : " + this.selectedItems);
        this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
        console.log("total : " + this.total);
    }
}
