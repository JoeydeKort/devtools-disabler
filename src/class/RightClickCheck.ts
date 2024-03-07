export class RightClickCheck {

    constructor() {
        document.addEventListener('contextmenu', this.disableRightClick);
    }

    private disableRightClick(e: Event) {
        e.preventDefault();
    }

}