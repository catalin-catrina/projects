import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-project';

  childForm!: FormGroup;
  formTitle = 'Insert title here';
  formSubtitle = 'Insert subtitle here';
  cardContainerTitle = 'Insert card container title here';
  isDisabled = false;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.childForm = this.fb.group({
      title: ['Insert title here'],
      subtitle: ['Insert subtitle here'],
    });

    this.childForm.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((values) => {
        this.formTitle = values.title;
        this.formSubtitle = values.subtitle;
      });
  }

  handleDisabled(isDisabled: boolean) {
    this.isDisabled = isDisabled;

    if (isDisabled) {
      this.childForm.disable();
    } else {
      this.childForm.enable();
    }
  }

  resetState() {
    this.isDisabled = false;
    this.childForm.reset();
    this.childForm.enable();
    this.cardContainerTitle = '';
  }
}
