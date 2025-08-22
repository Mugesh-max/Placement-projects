// Table Calculator Logic
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.keypad button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    const action = btn.getAttribute('data-action');

    if (action === 'clear') {
      display.value = '';
      return;
    }
    if (action === 'back') {
      display.value = display.value.slice(0, -1);
      return;
    }
    if (action === 'equals') {
      if (!display.value.trim()) return;
      try {
        const result = Function('return (' + display.value + ')')();
        display.value = result;
      } catch (e) {
        display.value = 'Error';
      }
      return;
    }
    if (value) display.value += value;
  });
});

// (Optional) Basic keyboard support
document.addEventListener('keydown', (e) => {
  const k = e.key;
  if (/\d/.test(k) || ['+','-','*','/','%','.','(',')'].includes(k)) {
    display.value += k;
  } else if (k === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (k === 'Enter' || k === '=') {
    try {
      if (!display.value.trim()) return;
      const result = Function('return (' + display.value + ')')();
      display.value = result;
    } catch {
      display.value = 'Error';
    }
  } else if (k.toLowerCase() === 'c') {
    // press 'c' to clear
    display.value = '';
  }
});
