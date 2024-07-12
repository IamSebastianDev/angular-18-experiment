import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "page-profile",
    standalone: true,
    imports: [],
    templateUrl: "./profile.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {}
