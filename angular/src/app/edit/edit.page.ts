import { Component } from '@angular/core';

import { legends } from '../names/nameslist'

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
  legends: Array<string> = legends;

  edit(event, id) {
    const input = event.target.previousElementSibling

    if (event.target.innerHTML === 'EDIT') {
      event.target.innerHTML = 'SAVE'
      input.removeAttribute("readonly")
      input.focus()
    } else {
      this.save(input, id)
      input.setAttribute("readonly", "")
      event.target.innerHTML = 'EDIT'
    }
  }

  save(element, id) {
    legends[id] = element.value
  }

  constructor() {

  }
}


