import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public user$: Observable<IUser> = this.authService.user$;

  constructor(
    private authService: AuthService
  ) { }

  public signIn(): void {
    this.authService.googleSignIn();
  }

  public signOut(): void {
    this.authService.googleSignOut();
  }
}
