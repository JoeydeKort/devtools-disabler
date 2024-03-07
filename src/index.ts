import { RightClickCheck } from "./class/RightClickCheck";
import { KeyShortcutCheck } from "./class/KeyShortcutCheck";
import { CheckDevtoolWindow } from "./class/CheckDevtoolWindow";

export function initializeComponents() {
    const rightClickCheck = new RightClickCheck();
    const keyShortcutCheck = new KeyShortcutCheck();
    const checkDevtoolWindow = new CheckDevtoolWindow();
}

document.addEventListener("DOMContentLoaded", () => {
    initializeComponents();
});
