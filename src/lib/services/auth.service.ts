import { computed, Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private user = new Map([
        ["admin", "1234"],
        ["test", "test"],
    ]);
    private _loggedIn = signal<boolean>(false);
    loggedIn = computed(() => this._loggedIn());

    login(username: string, password: string) {
        if (this.user.has(username) && this.user.get(username)! === password) {
            this._loggedIn.set(true);
            return true;
        }

        return false;
    }

    logout() {
        this._loggedIn.set(false);
    }
}
