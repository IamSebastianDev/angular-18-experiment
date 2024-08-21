import { ButtonComponent } from '$lib/components/button/button.component';
import { AuthService } from '$lib/services/auth.service';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'page-login',
    standalone: true,
    imports: [ReactiveFormsModule, ButtonComponent],
    templateUrl: './page.component.html',
    styleUrl: './page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {
    private readonly router = inject(Router);
    private readonly authService = inject(AuthService);

    // Create the form
    form = new FormGroup({
        username: new FormControl<string | null>(
            {
                value: null,
                disabled: false,
            },
            [Validators.required],
        ),
        password: new FormControl<string | null>(
            {
                value: null,
                disabled: false,
            },
            [Validators.required],
        ),
    });

    ngOnInit(): void {
        // If the user is already logged in, route him to the profile page
        if (this.authService.loggedIn()) {
            this.router.navigateByUrl('/profile');
        }
    }

    handleSubmit() {
        const { username, password } = this.form.value;
        if (this.form.valid && username && password) {
            const result = this.authService.login(username, password);
            if (result) {
                this.router.navigateByUrl('/profile');
                return;
            }

            this.form.setErrors({ invalid: true });
            return;
        }
    }
}
