import { OnChanges, EventEmitter } from '@angular/core';
export declare class StarComponent implements OnChanges {
    rating: number;
    starWidth: number;
    ratingClicked: EventEmitter<string>;
    ngOnChanges(): void;
    onClick(): void;
}
