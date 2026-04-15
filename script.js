let text = "Hi, I'm Pooja 👋";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();