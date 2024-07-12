import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "page-home",
    standalone: true,
    imports: [],
    templateUrl: "./home.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
