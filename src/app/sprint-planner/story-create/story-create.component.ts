import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SprintPlannerService } from '../sprint-planner.service';

@Component({
  selector: 'app-story-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './story-create.component.html',
  styleUrl: './story-create.component.scss',
})
export class StoryCreateComponent {
  storyForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    point: new FormControl('', Validators.required),
  });
  submitted: boolean = false;

  constructor(private _story: SprintPlannerService) {}

  // Function to add story. Checks if the form is valid before saving. Also checks for duplicate entries. Saves in local storage
  addStory() {
    if (this.storyForm.invalid) {
      this.submitted = true;
    } else {
      this.submitted = false;
      const index = this._story.stories?.findIndex(
        (story) =>
          story?.name?.toLowerCase() ===
          this.storyForm.value?.name?.toLowerCase()
      );
      if (index === -1) {
        this._story.stories?.push(this.storyForm.value);
        alert('Story has been added.');
        this.storyForm.reset();
      } else {
        alert('A story with the same name already exists.');
      }
    }
  }
}
