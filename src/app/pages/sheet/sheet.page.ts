import {Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonActionSheet,
  IonAvatar,
  IonBackButton,
  IonButtons, IonChip, IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonImg, IonLabel, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Avatar} from "../inicio/inicio.page";
import {ActionSheetButton} from "@ionic/angular";

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonChip, IonAvatar, IonImg, IonLabel, IonActionSheet]
})
export class SheetPage implements OnInit {
  imagenSeleccionada = signal<string>('/assets/images/avatar01.png');
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
  botonesAsheet: ActionSheetButton[] = [
    {
      text: this.avatarList[0].nombre,
      handler: () => {
        this.imagenSeleccionada.set(this.avatarList[0].imagen);
      }
    },
    {
      text: this.avatarList[1].nombre,
      handler: () => {
        this.imagenSeleccionada.set(this.avatarList[1].imagen);
      }
    },
    {
      text: this.avatarList[2].nombre,
      handler: () => {
        this.imagenSeleccionada.set(this.avatarList[2].imagen);
      }
    },
    {
      text: 'Cancel',
      role: "cancel",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
