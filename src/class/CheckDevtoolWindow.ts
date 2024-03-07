import { Message } from './Message';

export class CheckDevtoolWindow {
    private originalHTMLContent: HTMLElement | null = null;
    private message: Message;

    constructor() {
        this.message = new Message();
        this.checkDevTools();
        setInterval(this.checkDevTools.bind(this), 100);
    }

    private checkDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 150;
        const heightThreshold = window.outerHeight - window.innerHeight > 150;
        const isDevToolsOpen = widthThreshold || heightThreshold;

        if (isDevToolsOpen) {
            if (!this.originalHTMLContent) {
                this.originalHTMLContent = document.documentElement.cloneNode(true) as HTMLElement;
            }

            const emptyHTML = document.createElement('html');
            this.message.showMessage('Close the developer tools to get content back.', emptyHTML);
            document.documentElement.replaceWith(emptyHTML);
        } else {
            if (this.originalHTMLContent) {
                document.documentElement.replaceWith(this.originalHTMLContent);
                this.originalHTMLContent = null;
            }
        }
    }
}
