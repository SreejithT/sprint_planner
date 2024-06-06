import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { SprintPlannerService } from '../sprint-planner.service';

@Component({
  selector: 'app-story-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './story-calculator.component.html',
  styleUrl: './story-calculator.component.scss',
})
export class StoryCalculatorComponent {
  storyCalculatorForm: FormGroup = new FormGroup({
    point: new FormControl('', Validators.required),
  });
  submitted: boolean = false;

  constructor(public _story: SprintPlannerService) {}

  // Function to auto select stories based on the target sprint point required
  autoSelect() {
    if (this.storyCalculatorForm.valid) {
      if (this._story.stories?.length === 0) {
        alert('No stories have been added.');
        return;
      }
      this.submitted = false;
      this._story.selectedStories = [];
      let point = 0;
      const sortedStories = [...this._story.stories].sort(
        (a, b) => b.point - a.point
      );
      sortedStories?.forEach((story) => {
        if (point + story?.point <= this.storyCalculatorForm.value?.point) {
          this._story.selectedStories?.push(story);
          point += story?.point;
        }
      });
    } else {
      this.submitted = true;
    }
  }

  // Function to clear auto selected stories
  clearSelectedStories() {
    this._story.stories = this._story.stories?.filter(
      (obj1) =>
        !this._story.selectedStories?.some(
          (obj2) => obj1?.['name'] === obj2?.['name']
        )
    );
    this._story.selectedStories = [];
    alert('Selected stories have been deleted.');
  }

  // Function to clear all storeies
  clearAll() {
    alert('All stories have been deleted.');
    this._story.selectedStories = [];
    this._story.stories = [];
  }
}
