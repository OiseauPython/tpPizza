import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {LoadingController, ToastController} from "@ionic/angular";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

    authStatus: boolean;
    private isAuth: any;

    constructor(public toastController: ToastController, public loadingController: LoadingController, private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.authStatus = this.authService.isAuth;
    }

    async toastSignIn() {
        const toast = await this.toastController.create({
            message: 'Authentification effectuée',
            duration: 2000
        });
        await toast.present();
    }
    
    async onSignIn() {
        const loading = await this.loadingController.create({
            message: 'Merci de patienter...',
        });
        await loading.present();
        this.authService.signIn().then(
            () => {
                this.toastSignIn();
                this.authStatus = this.authService.isAuth;
                loading.dismiss();
                this.router.navigate(['']);
            }
        );
    }

    async onSignOut() {
        this.authService.isAuth = false;
        this.authStatus = this.isAuth;
    }

}
