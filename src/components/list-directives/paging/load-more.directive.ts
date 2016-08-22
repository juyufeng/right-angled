import { SkipSelf, HostListener, Directive } from '@angular/core';
import { BufferedPager } from 'e2e4';
import { RtListService } from '../list-service';
import { RtNullObjectInjectable } from '../null-object-injectable';

@Directive({
    selector: '[rtLoadMore]'
})
export class LoadMoreDirective {
    constructor( @SkipSelf() private listService: RtListService, @SkipSelf() private pager: BufferedPager) {
        if (pager === RtNullObjectInjectable.instance) {
            throw new Error('[rtLoadMore] directive can be used only with buffered lists.');
        }
    }
    @HostListener('click', ['$event'])
    public loadMore(evt: MouseEvent): void {
        this.listService.loadData();
        evt.preventDefault();
    }
}
