import { AuthService } from '$lib/services/auth.service';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-navigation-bar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
    private readonly authService = inject(AuthService);
    private readonly router = inject(Router);
    isLoggedIn = computed(() => this.authService.loggedIn());

    handleLogout() {
        this.authService.logout();
        this.router.navigateByUrl('');
    }
}
