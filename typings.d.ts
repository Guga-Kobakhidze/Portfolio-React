declare module "jquery" {
  interface JQuery {
    rotatingSlider(options?: {
      autoRotate?: boolean;
      autoRotateInterval?: number;
      draggable?: boolean;
      slideHeight?: number;
      slideWidth?: number;
    }): JQuery;
  }
}
