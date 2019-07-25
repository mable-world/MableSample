import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let StarComponent = class StarComponent {
    constructor() {
        this.rating = 0;
        this.starWidth = 0;
        this.ratingClicked = new EventEmitter();
    }
    ngOnChanges() {
        this.starWidth = this.rating * 75 / 5;
    }
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], StarComponent.prototype, "rating", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], StarComponent.prototype, "ratingClicked", void 0);
StarComponent = tslib_1.__decorate([
    Component({
        selector: 'pm-star',
        template: "\r\n<div class=\"crop\"\r\n     [style.width.px]=\"starWidth\"\r\n     [title]=\"rating\"\r\n     (click)=\"onClick()\">\r\n  <div style=\"width: 75px\">\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n  </div>\r\n</div>",
        styles: [".crop{overflow:hidden}div{cursor:pointer}"]
    })
], StarComponent);
export { StarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYWJsZS1zYW1wbGUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3N0YXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFOMUI7UUFPYSxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDSixrQkFBYSxHQUNyQixJQUFJLFlBQVksRUFBVSxDQUFDO0lBUy9CLENBQUM7SUFQQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxNQUFNLGVBQWUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FDRixDQUFBO0FBWlU7SUFBUixLQUFLLEVBQUU7OzZDQUFZO0FBRVY7SUFBVCxNQUFNLEVBQUU7c0NBQWdCLFlBQVk7b0RBQ1I7QUFKcEIsYUFBYTtJQU56QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQiw2WUFBb0M7O0tBRXZDLENBQUM7R0FFVyxhQUFhLENBYXZCO1NBYlUsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25DaGFuZ2VzLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwbS1zdGFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdGFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3N0YXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSByYXRpbmcgPSAwO1xyXG4gICAgc3RhcldpZHRoID0gMDtcclxuICAgIEBPdXRwdXQoKSByYXRpbmdDbGlja2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9XHJcbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIFxyXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc3RhcldpZHRoID0gdGhpcy5yYXRpbmcgKiA3NSAvIDU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnJhdGluZ0NsaWNrZWQuZW1pdChgVGhlIHJhdGluZyAke3RoaXMucmF0aW5nfSB3YXMgY2xpY2tlZCFgKTtcclxuICAgIH1cclxuICB9Il19