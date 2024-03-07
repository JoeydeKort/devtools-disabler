export class Message {

    public showMessage(message: string, parentElement: HTMLElement) {
        this.closeExistingMessage();

        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.id = 'devtools-message';
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.backgroundColor = 'white';
        messageDiv.style.padding = '10px';
        messageDiv.style.border = '1px solid black';
        messageDiv.style.zIndex = '9999';

        parentElement.appendChild(messageDiv);
    }

    private closeExistingMessage() {
        const existingMessageDiv = document.getElementById('devtools-message');
        if (existingMessageDiv) {
            existingMessageDiv.remove();
        }
    }

}
