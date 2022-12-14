import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../style.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  ngOnInit() {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
     
    });}

  title = 'miniprojet';
}
