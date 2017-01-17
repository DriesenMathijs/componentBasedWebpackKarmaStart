export default {
  controller: AppController,
  template: "<div ui-view></div>"
};

export class AppController {
  title: string;

  $onInit() {
    this.title = "RootComponent Welcome title";
  }
}