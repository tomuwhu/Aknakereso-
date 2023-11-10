m = 10
n = 15
k = 20
end = false
var l = Array(k).fill(" * ").concat(Array(m * n - k).fill(" - "))
l.sort((a, b) => Math.random() - .5).sort((a, b) => Math.random() - .5)
const g = (i, event) => {
  if (document.getElementById(`x${i}`).innerHTML == "&nbsp; &nbsp;") {
    document.getElementById(`x${i}`).innerHTML = "📍"
    document.getElementById(`x${i}`).style.backgroundColor="rgb(255,170,184)"
  }
  else {
    document.getElementById(`x${i}`).innerHTML = "&nbsp; &nbsp;"
    document.getElementById(`x${i}`).style.backgroundColor="aqua"
  }
  event.preventDefault()
  return false
}
const f = i => {
  if (end) return true
  if (l[i][1] == "*") {
    document.getElementById(`x${i}`).innerHTML = "💣"
    document.getElementById(`x${i}`).style.backgroundColor="red"
    end = true
    l.forEach((v, i) => { 
      if (v[1] == "*") document.getElementById(`x${i}`).innerHTML = "💣"
    })
  }
  else {
    kosz = 0
    szl = [-n - 1, -n, -n + 1, -1, 1, n - 1, n, n + 1]
    if (i % n == 0) szl = [-n, -n + 1, 1, n, n + 1]
    if (i % n == 14) szl = [-n - 1, -n, -1, n - 1, n]
    szl.forEach(v => {
      if (i + v >= 0 && i + v < n * m && l[i + v][1] == "*") kosz++
    })
    document.getElementById(`x${i}`).innerHTML = kosz
    document.getElementById(`x${i}`).style.backgroundColor = `rgb(${120 + kosz * 30},${250 - kosz * 30},134)`
    l[i] = kosz + "-" + l[i][2]
    if (kosz == 0)
    szl.forEach(v => {
      if (i + v >= 0 && i + v < n * m && l[i + v][0] == " ") f(i + v)
    })
  }
}
const main = () => {
  document.getElementById("cont").innerHTML = l.map((v, i) => `<div id="x${i}" onclick="f(${i})" oncontextmenu="g(${i}, event)">&nbsp;${v[0]}&nbsp;</div>`).join("")
}