

export default function valueCheckbox() {
    let a = '';
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(e => a += e.value);
    console.log(a);
  }