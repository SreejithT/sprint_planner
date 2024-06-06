import { Component } from '@angular/core';
import { SprintPlannerService } from '../sprint-planner.service';

@Component({
  selector: 'app-story-display',
  standalone: true,
  imports: [],
  templateUrl: './story-display.component.html',
  styleUrl: './story-display.component.scss',
})
export class StoryDisplayComponent {
  constructor(public _story: SprintPlannerService) {}
}
