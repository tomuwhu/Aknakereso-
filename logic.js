var [m, n, k, end, o] = [12, 17, 30, false, "&nbsp; &nbsp;"]
const ih = i => document.getElementById(`x${i}`)
var l = Array(k)
        .fill(" * ").concat(Array(m * n - k).fill(" - "))
        .sort((a, b) => Math.random() - .5).sort((a, b) => Math.random() - .5)
const g = (i, e) => {
  if (ih(i).innerHTML == o) {
    ih(i).innerHTML = "📍"
    ih(i).style.backgroundColor="rgb(255,170,184)"
  }
  else {
    ih(i).innerHTML = o
    ih(i).style.backgroundColor="aqua"
  }
  e.preventDefault()
}
const f = i => {
  if (end) return true
  if (l[i][1] == "*") {
    ih(i).innerHTML = "💣"
    ih(i).style.backgroundColor="red"
    end = true
    l.forEach((v, i) => ih(i).innerHTML = v[1] == "*" ?  "💣" : ih(i).innerHTML)
  } else {
    kosz = 0
    szl = i % n == 0  ? [-n, -n + 1, 1, n, n + 1] :
          i % n == n - 1 ? [-n - 1, -n, -1, n - 1, n] :
          [-n - 1, -n, -n + 1, -1, 1, n - 1, n, n + 1]
    szl.forEach(v => 
      (i + v >= 0 && i + v < n * m && l[i + v][1] == "*") ? kosz++ : 0
    )
    ih(i).innerHTML = kosz
    ih(i).style.backgroundColor =
      `rgb(${120 + kosz * 30},${250 - kosz * 30},134)`
    l[i] = kosz + "-" + l[i][2]
    if (kosz == 0) szl.forEach(v => {
      if (i + v >= 0 && i + v < n * m && l[i + v][0] == " ") f(i + v)
    })
  }
}
const main = () => {
  ih('c').innerHTML = l.map((v, i) => `
  <div  id="x${i}" onclick="f(${i})" 
        oncontextmenu="g(${i}, event)"
  >&nbsp;${v[0]}&nbsp;</div>`).join("")
  ih('c').style.gridTemplateColumns = `repeat(${n}, 1fr)`
  ih('c').style.width=`${n * 47}px`;
}