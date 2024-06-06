import { Injectable } from '@angular/core';
import { Story } from './models-sprint-planner';

@Injectable({
  providedIn: 'root',
})
export class SprintPlannerService {
  stories: Story[] = [];
  selectedStories: Story[] = [];
  constructor() {}
}
