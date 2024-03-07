export class KeyShortcutCheck {

    constructor() {
        document.onkeydown = (e: KeyboardEvent) => this.disableDevTools(e);
    }

    private disableDevTools(e: KeyboardEvent) {

        if (
            e.key === 'F12' ||
            this.isCommandKey(e, 'I') ||
            this.isCommandKey(e, 'J') ||
            this.isCommandKey(e, 'C') ||
            this.ctrlShiftKey(e, 'I') ||
            this.ctrlShiftKey(e, 'J') ||
            this.ctrlShiftKey(e, 'C') ||
            (e.shiftKey && e.key === 'F5') ||
            (e.shiftKey && e.key === 'F3') ||
            (e.shiftKey && e.key === 'F7') ||
            (e.shiftKey && e.key === 'F9') ||
            (e.shiftKey && e.key === 'E') ||
            (e.shiftKey && e.key === 'M') ||
            (e.shiftKey && e.key === 'K') ||
            (e.ctrlKey && e.key.toLowerCase() === 'u')
        ) {
            e.preventDefault();
        }

    }

    private isCommandKey(event: KeyboardEvent, key: string): boolean {
        return (event.metaKey || event.key.toLowerCase() === 'meta') && event.key.toLowerCase() === key.toLowerCase();
    }

    private ctrlShiftKey(event: KeyboardEvent, key: string): boolean {
        return event.ctrlKey && event.shiftKey && event.key === key;
    }

}