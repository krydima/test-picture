import { isSafari } from './detect-browser';

export function WrongBrowserNotification() {
  if (isSafari) {
    return null;
  }

  return (
    <div className="wrong-browser-notification">
      You won't be able to see the bug. You have to use the Safari browser
    </div>
  );
}
