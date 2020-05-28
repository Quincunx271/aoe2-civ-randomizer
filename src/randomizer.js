const CIVS = [
  { civ: "Britons", wiki_sub: "a/ae" },
  { civ: "Byzantines", wiki_sub: "2/27" },
  { civ: "Celts", wiki_sub: "5/59" },
  { civ: "Chinese", wiki_sub: "c/cc" },
  { civ: "Franks", wiki_sub: "1/1b" },
  { civ: "Goths", wiki_sub: "2/24" },
  { civ: "Japanese", wiki_sub: "9/9a" },
  { civ: "Mongols", wiki_sub: "1/10" },
  { civ: "Persians", wiki_sub: "a/ad" },
  { civ: "Saracens", wiki_sub: "5/59" },
  { civ: "Teutons", wiki_sub: "3/3f" },
  { civ: "Turks", wiki_sub: "1/1c" },
  { civ: "Vikings", wiki_sub: "c/c9" },

  { civ: "Aztecs", wiki_sub: "0/0c" },
  { civ: "Huns", wiki_sub: "1/17" },
  { civ: "Koreans", wiki_sub: "7/73" },
  { civ: "Mayans", wiki_sub: "0/05" },
  { civ: "Spanish", wiki_sub: "0/0a" },

  { civ: "Incas", wiki_sub: "5/5e" },
  { civ: "Indians", wiki_sub: "8/8b" },
  { civ: "Italians", wiki_sub: "e/e1" },
  { civ: "Magyars", wiki_sub: "6/68" },
  { civ: "Slavs", wiki_sub: "1/12" },

  { civ: "Berbers", wiki_sub: "7/71" },
  { civ: "Ethiopians", wiki_sub: "c/cb" },
  { civ: "Malians", wiki_sub: "8/80" },
  { civ: "Portuguese", wiki_sub: "6/60" },

  { civ: "Burmese", wiki_sub: "7/79" },
  { civ: "Khmer", wiki_sub: "e/ec" },
  { civ: "Malay", wiki_sub: "c/c3" },
  { civ: "Vietnamese", wiki_sub: "0/07" },

  { civ: "Bulgarians", wiki_sub: "c/ce" },
  { civ: "Cumans", wiki_sub: "c/cc" },
  { civ: "Lithuanians", wiki_sub: "0/0d" },
  { civ: "Tatars", wiki_sub: "f/f2" },
]
CIVS.sort((a, b) => a.civ.localeCompare(b.civ))

thelist = ''

CIVS.forEach(({civ, wiki_sub}) => {
  civitem = `<img alt="${civ}" src="https://vignette.wikia.nocookie.net/ageofempires/images/${wiki_sub}/CivIcon-${civ}.png" width="104" height="104" />`
  civitem = `<figure id="figure-${civ}">${civitem}<figcaption>${civ}</figcaption></figure>`
  civitem = `<button id="${civ}" class="civ" type="button" onclick="civclicked(this)">${civitem}<span id="block-${civ}" class="block">&#10060;</span></button>`
  thelist += `    <li>${civitem}</li>\n`
});

document.getElementById('civdisplay').innerHTML = thelist

civs = {}
CIVS.forEach(({civ, ...rest}) => {
  civs[civ] = true
})

function civclicked(b) {
  civ = b.id
  civs[b.id] = !civs[b.id]
  
  document.getElementById(`block-${b.id}`).style.visibility = civs[b.id] ? "" : "visible"
}

function randomize() {
  pool = Object.keys(civs).filter(civ => civs[civ])
  selection = pool[Math.floor(Math.random() * pool.length)]
  document.getElementById("selection").innerHTML = document.getElementById(`figure-${selection}`).outerHTML
  console.log(selection)
}
