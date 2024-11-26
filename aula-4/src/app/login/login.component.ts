import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { SignInService } from "../sign-in/sign-in.service";
import { LocalStorageService } from "../services/local-storage.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    private readonly signInService: SignInService,
    private readonly localStorageService: LocalStorageService,
    private readonly toastrService: ToastrService
  ) {
    this.form = new FormGroup({
      email: new FormControl("email@email.com", []),
      password: new FormControl("pass@@", []),
    });
  }

  onSubmit() {
    // console.log(this.form.value);
    this.signInService.signIn(this.form.value).subscribe((data) => {
      this.localStorageService.set("token", data.token);
      this.toastrService.success("Success!", "Welcome :)");
    });
  }
}
