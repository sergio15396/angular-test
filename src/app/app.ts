import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public readonly IMGS_PATH: string = "img/";
  public imgFiles: string[] = [
    "goku.webp",
    "vegeta.webp",
    "piccolo.webp"
  ];
  public imgIdx: number = 0;

  public loggedIn: boolean = false;

  get imgFile(): string {
    return this.IMGS_PATH + this.imgFiles[this.imgIdx];
  }

  public onButtonClicked(event: MouseEvent) {
    this.imgIdx = Math.floor(Math.random() * this.imgFiles.length);
  }

  private _name: string = "";

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  public login() {
    if (this._name && this._name.trim().length > 0) {
      this.loggedIn = true;
    }
  }
}