import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-story-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './story-calculator.component.html',
  styleUrl: './story-calculator.component.scss',
})
export class StoryCalculatorComponent implements OnInit {
  stories: { name: string; point: number }[] = [];
  selectedStories: { name: string; point: number }[] = [];
  storyCalculatorForm: FormGroup = new FormGroup({
    point: new FormControl('', Validators.required),
  });
  submitted: boolean = false;

  ngOnInit(): void {
    const data: any = localStorage.getItem('stories');
    if (data) {
      this.stories = JSON.parse(data);
    }
  }

  // Function to auto select stories based on the target sprint point required
  autoSelect() {
    if (this.storyCalculatorForm.valid) {
      if (this.stories?.length === 0) {
        alert('No stories have been added.');
        return;
      }
      this.submitted = false;
      this.selectedStories = [];
      let point = 0;
      this.stories?.forEach((story) => {
        if (point + story?.point <= this.storyCalculatorForm.value?.point) {
          this.selectedStories?.push(story);
          point += story?.point;
        }
      });
    } else {
      this.submitted = true;
    }
  }

  // Function to clear auto selected stories
  clearSelectedStories() {
    this.stories = this.stories?.filter(
      (obj1) =>
        !this.selectedStories?.some((obj2) => obj1?.['name'] === obj2?.['name'])
    );
    this.selectedStories = [];
    localStorage.setItem('stories', JSON.stringify(this.stories));
    alert('Selected stories have been deleted.');
  }

  // Function to clear all storeies
  clearAll() {
    localStorage.removeItem('stories');
    alert('All stories have been deleted.');
    this.selectedStories = [];
    this.stories = [];
  }
}
