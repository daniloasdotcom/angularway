import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { youtube002Component } from '../../videos/youtube002/youtube002.component';
import { CopybleComponent } from '../../copyble/copyble.component';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule, youtube002Component, CopybleComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent implements OnInit{
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() text: string = '';
  mostrarConteudo: boolean = false;
  isMobile: boolean = false;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768; // Define se é um dispositivo móvel
  }

  toggleConteudo(): void {
    this.mostrarConteudo = !this.mostrarConteudo;
  }
}
