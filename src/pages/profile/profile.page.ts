import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { PageService } from "./profile.service";
import { User } from "../../models/user.model";
import { JsonPipe } from "@angular/common";
import { ButtonComponent } from "$components/button/button.component";
import { delay, tap } from "rxjs";

@Component({
    selector: "page-profile",
    standalone: true,
    imports: [JsonPipe, ButtonComponent],
    templateUrl: "./profile.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
    private readonly service = inject(PageService);
    data = signal<User | null>(null);
    loading = signal<boolean>(false);

    handleFetchData() {
        // Perform a simple http fetch from inside the Service
        // Use the result to set the data accordingly inside
        // the Signals
        this.service
            .getUser()
            .pipe(
                tap(() => this.loading.set(true)),
                // To demonstrate loading behavior
                delay(500)
            )
            .subscribe({
                next: (data) => this.data.set(data),
                complete: () => this.loading.set(false),
            });
    }
}
