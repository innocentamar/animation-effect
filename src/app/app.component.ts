import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'love-animation';

  isClicked = false;

  changeButton() {
    this.isClicked = true;  
    
    // if (this.isClicked === false)
    // {
    //   this.isClicked = true;
    // }
    // else 
    // {
    //   this.isClicked = false;
    // }

    setTimeout(() => {
      this.isClicked = false;
    }, 4000); // Adjust this duration to match your animation duration

    console.log(this.isClicked)
    
  }
}
