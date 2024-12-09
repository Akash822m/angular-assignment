import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPageComponent } from './components/form-page/form-page.component';
import { ApiDataComponent } from './components/api-data/api-data.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormPageComponent,ApiDataComponent,HomeComponent,CommonModule,ReactiveFormsModule,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assignment';
}
