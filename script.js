function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')

  // pegar tag Image
  const img = document.querySelector("#profile img")

  // substituir img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "Assets/Avatar.png")
  } else {
    img.setAttribute("src", "Assets/avatar-light.png")
    img.setAttribute(
      "alt", "Renan Santos com jaqueta preta no canada durante inverno"
    )
  }
}
