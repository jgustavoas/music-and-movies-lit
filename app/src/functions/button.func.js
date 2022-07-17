import apiFunc from './api.func';

export function navigate(ev) {
  const screen = ev.target.id.split('_')[1];

  if (screen === 'Home') this.screen = screen;
  else apiFunc(screen, this);
}
