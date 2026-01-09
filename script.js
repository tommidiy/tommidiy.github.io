buttons = [
    { label: "Release Chantal Petition", url:  "https://actionnetwork.org/petitions/surface-chantal-anicoche/" },
    { label: "Release Chantal Statement", url:  "https://www.bayanusa.org/blog/release-chantal" },
    { label: "Release Chantal Leaflet", url:  "https://static1.squarespace.com/static/66886d35f744d66b7141e374/t/6960032b99b728036d47b83f/1767899947384/Release+Polyeto+Pamphlet.pdf" },
    { label: "Write a Letter", url:  "https://docs.google.com/forms/d/e/1FAIpQLSfUTbCl36uZXC4qSfU1Pj3A6qB7-UmPjFZmxpKiN09tgYcKfQ/viewform" },
    { label: "AFP Video TW: Emotional Distress", url:  "https://www.instagram.com/reel/DTQBN7fCP1_/?igsh=NTc4MTIwNjQ2YQ==" },

    // { label: "diy insta", url:  "https://www.instagram.com/tommi.diy/" },
    // { label: "personal insta", url:  "https://www.instagram.com/code.thomas/" },
    // { label: "github", url:  "https://github.com/tommidiy" },
    // { label: "linkedin", url:  "https://example.com" },
    // { label: "contact", url:  "https://example.com" }
]

const buttonContainer = document.getElementById("button-container");
buttons.forEach(button => {
    const link = document.createElement("a");
    link.href = button.url;
    link.target = "_blank";

    const btn = document.createElement("button");
    btn.textContent = button.label;
    console.log(button.label);

    link.appendChild(btn);
    buttonContainer.appendChild(link);
});

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

function randPick(array) {
    return (array[Math.floor(Math.random() * array.length)])
}

const pallets = [
    ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4'], //candy pop
    ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff","#fffffc"], //pastel rainbow fantasy
    ["#f08080","#f4978e","#f8ad9d","#fbc4ab","#ffdab9"], //peach sorbet
    ["#70d6ff","#ff70a6","#ff9770","#ffd670","#e9ff70"], //pastel rainbow
    ["#7bdff2","#b2f7ef","#eff7f6","#f7d6e0","#f2b5d4"], //pastel fantasy
    ["#90f1ef","#ffd6e0","#ffef9f","#c1fba4","#7bf1a8"], //refreshing spring hues
    ["#d3f8e2","#e4c1f9","#f694c1","#ede7b1","#a9def9"], //pastel dreamland
    ["#5aa9e6","#7fc8f8","#f9f9f9","#ffe45e","#ff6392"], //pastel pop
    ["#ff69eb","#ff86c8","#ffa3a5","#ffbf81","#ffdc5e"] //summer splash
]

const fontSet = [
    "jacquarda-bastarda-9-regular",
    "tiny5-regular",
    "bytesized-regular"
]

function makeColorfulText(text) {
    function makeFunc() {
        const colorfulText = document.createElement('div');
        colorfulText.classList.add('colored-text');
        colors = randPick(pallets)
        shuffle(colors)

        font = randPick(fontSet)

        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.color = colors[index % colors.length];
            span.classList.add(font);
            colorfulText.appendChild(span);
        });
        return colorfulText
    }
    return makeFunc
}

function createEmoji(emojiText) {
    function makeFunc() {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojiText;
        return emoji
    }
    return makeFunc
}

const emojiSets = [
    ['✨', '🍀', '💖'],
    ['🌟', '🌷', '💕'],
    ['💫', '🌱', '🫀'],
    ['✨', '🌟', '💫'],
    ['🍀', '🌷', '🌱'],
    ['💖', '💕', '🫀']
]

const displaySet = randPick(emojiSets)

const fallingElements = [
    createEmoji(displaySet[0]),
    createEmoji(displaySet[1]),
    createEmoji(displaySet[2]),
    makeColorfulText('tommi.diy')
];

function randInterval(min, max) {
    return ((Math.random() * (max - min)) + min)
}

const fallingContainer = document.querySelector('.falling-container');

function makeItRain() {
    const fallingElement = randPick(fallingElements)()

    fallingElement.style.left = `${randInterval(0, 100)}vw`;
    fallingElement.style.fontSize = `${randInterval(1, 3)}rem`;
    const duration = randInterval(3, 10);
    fallingElement.style.animationDuration = `${duration}s`;
    fallingContainer.appendChild(fallingElement);

    setTimeout(() => { fallingElement.remove(); },duration * 1000);
}

// setInterval(makeItRain, 20);

const titleFontSet = [ //no i don't care that i'm downloading like 60 fonts for a gag on a links page, it looks cool
    // `"Playwrite HR", cursive`,
    // `"Coral Pixels", serif`,
    // `"Press Start 2P", system-ui`,
    // `"DotGothic16", sans-serif`,
    // `"Pixelify Sans", sans-serif`,
    // `"Varela Round", sans-serif`,
    // `"Micro 5 Charted", sans-serif`,
    // `"Jacquard 12 Charted", system-ui`,
    // `"Doto", sans-serif`,
    // `"Danfo", serif`,
    // `"Caesar Dressing", system-ui`,
    // `"Eater", serif`,
    // `"Monoton", sans-serif`,
    // `"Butterfly Kids", cursive`,
    // `"Rubik Glitch", system-ui`,
    // `"Rubik Beastly", system-ui`,
    // `"Monofett", monospace`,
    // `"Nabla", system-ui`,
    // `"Rock 3D", system-ui`,
    // `"Kablammo", system-ui`,
    // `"Nosifer", sans-serif`,
    // `"Frijole", system-ui`,
    // `"Rubik Puddles", system-ui`,
    // `"Bonbon", cursive`,
    // `"Palette Mosaic", system-ui`,
    // `"Chokokutai", system-ui`,
    // `"Rubik Storm", system-ui`,
    // `"Hanalei", system-ui`,
    // `"Kalnia Glaze", serif`,
    // `"Blaka Ink", system-ui`,
    // `"Honk", system-ui`,
    // `"Reem Kufi Fun", sans-serif`,
    // `"Foldit", sans-serif`,
    // `"Creepster", system-ui`,
    // `"Butcherman", system-ui`,
    // `"Ruslan Display", sans-serif`,
    // `"Asset", serif`,
    // `"Sancreek", serif`,
    // `"WindSong", cursive;`,
    // `"Arizonia", cursive`,
    // `"Snowburst One", system-ui`,
    // `"Italianno", cursive`,
    // `"Hachi Maru Pop", cursive`,
    // `"Rock Salt", cursive`,
    // `"Knewave", system-ui`,
    // `"Libre Barcode 39 Text", system-ui`,
    // `"Plaster", system-ui`,
    // `"Big Shoulders Stencil", sans-serif`,
    // `"Zilla Slab Highlight", serif`,
    // `"Geostar", serif`,
    // `"Tsukimi Rounded", sans-serif`,
    `"DM Serif Text", serif`
]
shuffle(titleFontSet)
const svg = document.querySelector('svg');
const text = svg.querySelector('text');
titileFontIndex = 0
function shuffleTitleFont() {
    text.style.fontFamily = titleFontSet[titileFontIndex % titleFontSet.length];
    titileFontIndex ++
    let bbox = text.getBBox();
    svg.setAttribute('viewBox', [bbox.x, bbox.y, bbox.width, bbox.height].join(' '));
}
titleFontSet.forEach(_ => {
    shuffleTitleFont()
}); //idk why but this fixes a rendering issue where the title is in the wrong spot

setInterval(shuffleTitleFont, 200);

