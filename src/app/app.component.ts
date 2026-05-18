import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('starCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
  private animId = 0;
  private ctx!: CanvasRenderingContext2D;
  cursorX = 0;
  cursorY = 0;
  ringX = 0;
  ringY = 0;
  private rafId = 0;

  @HostListener('window:mousemove', ['$event'])
  onMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
  }

  @HostListener('window:resize')
  onResize() { this.initCanvas(); }

  ngAfterViewInit() {
    this.initCanvas();
    this.animateCursor();
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = canvas.getContext('2d')!;

    this.stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.55 + 0.1,
      speed: Math.random() * 0.25 + 0.05,
    }));

    cancelAnimationFrame(this.animId);
    this.animateStars();
  }

  private animateStars() {
    const { width, height } = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, width, height);

    for (const s of this.stars) {
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
      this.ctx.fill();
      s.y -= s.speed;
      if (s.y < 0) { s.y = height; s.x = Math.random() * width; }
    }

    this.animId = requestAnimationFrame(() => this.animateStars());
  }

  private animateCursor() {
    const ease = 0.12;
    this.ringX += (this.cursorX - this.ringX) * ease;
    this.ringY += (this.cursorY - this.ringY) * ease;

    const dot = document.querySelector('.cursor-dot') as HTMLElement;
    const ring = document.querySelector('.cursor-ring') as HTMLElement;
    if (dot) { dot.style.left = this.cursorX + 'px'; dot.style.top = this.cursorY + 'px'; }
    if (ring) { ring.style.left = this.ringX + 'px'; ring.style.top = this.ringY + 'px'; }

    this.rafId = requestAnimationFrame(() => this.animateCursor());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    cancelAnimationFrame(this.rafId);
  }
}
