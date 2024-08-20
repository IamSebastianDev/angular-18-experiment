import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "[ui-button]",
    standalone: true,
    imports: [],
    template: "<ng-content></ng-content>",
    styleUrl: "./button.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
