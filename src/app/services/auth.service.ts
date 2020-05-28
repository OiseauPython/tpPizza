export class AuthService {

    isAuth = false;

    signIn() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        console.log('Sign in successful!',this.isAuth);
                        resolve(true);
                    }, 2000
                );
            }
        );
    }


    signOut() {
        this.isAuth = false;
        console.log('Sign out successful!',this.isAuth);
    }
}