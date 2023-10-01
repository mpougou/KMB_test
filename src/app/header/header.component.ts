import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  fullName: string = "Panagiota Bougou"
  name: string = ''
  firstname: string = ''

  ngOnInit() {
    var values = this.fullName.split(' ')
    this.firstname = values[0]
    values.forEach(el => {
      this.name = this.name + el.charAt(0)
    })
  }
}
