import { DecimalPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroEye, heroEyeSlash } from "@ng-icons/heroicons/outline";

@Component({
  selector: "app-ng-if",
  standalone: true,
  imports: [NgIconComponent, DecimalPipe, NgIf],
  templateUrl: "./ng-if.component.html",
  styleUrl: "./ng-if.component.scss",
  viewProviders: [
    provideIcons({
      heroEye,
      heroEyeSlash,
    }),
  ],
})
export class NgIfComponent {
  account: Account = {
    name: "Matheus Cruz",
    balance: 1000,
  };

  visible: boolean = false;
}

interface Account {
  name: string;
  balance: number;
}
