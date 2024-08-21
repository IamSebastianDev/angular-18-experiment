import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'page-home',
    standalone: true,
    imports: [],
    templateUrl: './page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
