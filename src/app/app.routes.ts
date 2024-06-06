import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-story',
    pathMatch: 'full',
  },
  {
    path: 'create-story',
    loadComponent: () =>
      import('./sprint-planner/story-create/story-create.component').then(
        (mod) => mod.StoryCreateComponent
      ),
  },
  {
    path: 'stories',
    loadComponent: () =>
      import('./sprint-planner//story-display/story-display.component').then(
        (mod) => mod.StoryDisplayComponent
      ),
  },
  {
    path: 'sprint-calculator',
    loadComponent: () =>
      import(
        './sprint-planner//story-calculator/story-calculator.component'
      ).then((mod) => mod.StoryCalculatorComponent),
  },
];
