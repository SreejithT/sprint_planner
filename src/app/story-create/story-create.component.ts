import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-story-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './story-create.component.html',
  styleUrl: './story-create.component.scss',
})
export class StoryCreateComponent implements OnInit {
  stories: { name: string; point: number }[] = [];
  storyForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    point: new FormControl('', Validators.required),
  });
  submitted: boolean = false;

  ngOnInit(): void {
    const data: any = localStorage.getItem('stories');
    if (data) {
      this.stories = JSON.parse(data);
    }
  }

  // Function to add story. Checks if the form is valid before saving. Also checks for duplicate entries. Saves in local storage
  addStory() {
    if (this.storyForm.invalid) {
      this.submitted = true;
    } else {
      this.submitted = false;
      const index = this.stories?.findIndex(
        (story) =>
          story?.name?.toLowerCase() ===
          this.storyForm.value?.name?.toLowerCase()
      );
      if (index === -1) {
        this.stories?.push(this.storyForm.value);
        alert('Story has been added.');
        this.storyForm.reset();
      } else {
        alert('A story with the same name already exists.');
      }
      localStorage.setItem('stories', JSON.stringify(this.stories));
    }
  }
}
