import { Component, ViewChild } from '@angular/core';
import { LoadingController, InfiniteScroll } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll

  loading;
  photos: Array<string> = [];

  constructor(
    public loadingController: LoadingController
  ) {

  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');

      this.randomPhotos()
      event.target.complete();

      // Caso ultrapasse 500 fotos, para de carregar
      if (this.photos.length >= 501) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  ngOnInit() {
    this.printOnConsole();
    this.presentLoading();


    this.randomPhotos();

    setTimeout(() => {
      try {
        this.dismissLoading();
      } catch (err) {
        console.error(err);
        alert('Error dismissing loader');
      }

    }, 1000)

  }

  randomPhotos() {
    let i = 0;
    while (i < 12) {
      let salt = Math.floor((Math.random() * 300) + 1);
      this.photos.push(`https://picsum.photos/200/200?image=${salt}`)
      i = i + 1;
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please wait...'
    });
    return await this.loading.present();
  }

  printOnConsole() {
    console.log('Running a public function on init');
  }

  dismissLoading() {
    if (!_.isNil(this.loading)) {
      this.loading.dismiss();
    }
  }
}
