import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiDataService } from '../../service/api-data.service';
// import { ApiDataService } from './service/api-data.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent {
  word: string = '';
  wordData: any = null;
  errorMessage: string = '';

  constructor(private apiDataService: ApiDataService) {}

  // Fetch word data from the service
  fetchWordData() {
    if (!this.word.trim()) {
      this.errorMessage = 'Please enter a valid word.';
      this.wordData = null;
      return;
    }

    this.apiDataService.fetchWordData(this.word).subscribe(
      (response) => {
        this.wordData = response;
        this.errorMessage = '';
      },
      (error) => {
        this.wordData = null;
        this.errorMessage = 'Word not found or an error occurred.';
      }
    );
  }
}
