import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() type: string = 'button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const base = 'px-4 py-2 rounded transition-colors duration-200';
    const variants = {
      primary: 'bg-pink-600 hover:bg-pink-700 text-white',
      secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
    };
    return `${base} ${variants[this.variant]}`;
  }
}
