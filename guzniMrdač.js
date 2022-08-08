function guzniMrdač(parameter) {
    const mrdač = document.createElement('img');
    let posx;
    let posy;
    let len;

    mrdač.id = "mrdanje";
    mrdač.setAttribute('src',parameter);

    document.body.appendChild(mrdač);

    for(let i = 1; i <= 1000; i++) {
        setTimeout(function sekser() {
            posx = Math.floor(Math.random() * 1000);
            posy = Math.floor(Math.random() * 1000);
            colors = ["orange","red","yellow","green","blue","purple"];
            len = colors.length;

            const randColor = Math.floor(Math.random() * len);
            const changeBg = (randColor, colors[randColor]);

            console.log(`%c [${i}]`,"color: lightgreen; font-weight: bold;");
            console.log(posx);
            console.log(posy);

            document.body.style.backgroundColor = `${changeBg}`;
            
            mrdač.style = `
                position: relative;
                width: 20%;
                height: 30%;
                top: ${posx}px;
                left: ${posy}px;
            `;
        },i* 250);
    }
}

guzniMrdač('https://media.discordapp.net/attachments/967009280777666601/1006232634034241687/Picsart_22-08-08_18-09-04-121.png');
