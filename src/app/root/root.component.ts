
export class AppController {
  title: string;

  $onInit() {
    this.title = 'Hello Component based Angular World';
  }
}

export default {
  controller: AppController,
  template: `
    <h1>{{$ctrl.title}}</h1>
  `
};
