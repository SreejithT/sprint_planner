import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-display',
  standalone: true,
  imports: [],
  templateUrl: './story-display.component.html',
  styleUrl: './story-display.component.scss',
})
export class StoryDisplayComponent implements OnInit {
  stories: { name: string; point: number }[] = [];
  ngOnInit(): void {
    const data: any = localStorage.getItem('stories');
    if (data) {
      this.stories = JSON.parse(data);
    }
  }
}
