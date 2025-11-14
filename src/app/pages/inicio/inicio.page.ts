import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAlert,
  IonAvatar,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg, IonItem, IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {AlertButton} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonAvatar, IonImg, IonList, IonItem, IonLabel, IonAlert]
})
export class InicioPage implements OnInit {
  private readonly router: Router = inject(Router);
  avatarList: Avatar[] = [
    {
      nombre: "Amon",
      imagen: '/assets/images/avatar01.png',
    },
    {
      nombre: "Yushu",
      imagen: '/assets/images/avatar02.png',
    },
    {
      nombre: "Shana",
      imagen: '/assets/images/avatar03.png',
    }
  ];
  botonesAlert:AlertButton[]=[
    {
      text: 'CANCEL',
      role: 'cancel'
    },
    {
      text: 'OK',
      handler: value =>{
        this.router.navigateByUrl('/sheet');
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
export interface Avatar{
  nombre: string;
  imagen: string;
}
