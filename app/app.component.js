(function(app) {

app.AppComponent = AppComponent;
function AppComponent() {
  this.title = 'ES5 JavaScript';

  this.inputData = 'hello 4';
}

AppComponent.annotations = [
  new ng.core.Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: [
      // See hero-di-inject-additional.component
      'hero-host, hero-host-dsl { border: 1px dashed black; display: block; padding: 4px;}',
      '.heading {font-style: italic}'
    ]
  })
];

})(window.app = window.app || {});


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
