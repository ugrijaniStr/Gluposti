function marokyPleše(par1, par2) {
    const maroky = document.createElement('img'); 
    const coro = document.createElement('img');
    const boom = document.createElement('img');
    const music = document.createElement('video');
    const cbg = document.createElement('div');

    const css = {
        pos: 'position: relative;',
        posx: 'top: 30%;',
    }

    let j;
    let i;
    let k;
    let len;
    let lenc;
    let val;
    let rig;
    let posxm, posxc;
    let posym, posyc;
    let list = ['maroky','coro','boom']

    maroky.id = 'maroky';
    coro.id = 'coro';
    boom.id = 'boom';

    music.setAttribute('src','https://cdn.discordapp.com/attachments/993253699650601055/1006694062050513056/vanyjedebananu.mp3');
    maroky.setAttribute('src',par2);
    coro.setAttribute('src',par1);
    boom.setAttribute('src','https://images-ext-2.discordapp.net/external/ShrQ7qiO5blq8lWXUycDuUN1ccy5egv_Wa-Eu3ZYfq0/https/i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif');
    
    document.body.appendChild(music).play();
    document.body.appendChild(maroky);
    document.body.appendChild(coro);

    val = 1000;
    rig = 0;
    for(j = 0; j <= 700; j++) {
        setTimeout(function timer() {
            maroky.style = `
                ${css.pos};
                width: 10%;
                height: 10%;
                ${css.posx}
                left: ${[rig += 0.5]}px;
            `;
            coro.style = `
                ${css.pos};
                width: 10%;
                height: 10%;
                ${css.posx}
                left: ${[val -= 1]}px;
            `;
            boom.style = `
                ${css.pos};
                ${[css.posx + 40]}
                left: 50%;
                width: 20%;
                height: 30%;
            `;
            cbg.style = `
                position: absolute;
                z-index: 10;
                background: white;
                width: 100%;
                height: 100%;
                margin: auto;
                display: block;
            `;

            if(val == 400) {
                document.body.appendChild(boom);
                len = list.length;
                setTimeout(function brisanje() {
                    for(i = 0; i <= len; i++) {
                        console.log(list[len]);
                    }
                }, 1000);
                document.body.appendChild(cbg);
                for(k = 0; k <= 1000; k++) {
                    setTimeout(function brojanje() {
                        posxm = Math.floor(Math.random() * 1000);
                        posym = Math.floor(Math.random() * 1000);
                        posxc = Math.floor(Math.random() * 1000);
                        posyc = Math.floor(Math.random() * 1000);
                        colors = ["orange","red","yellow","green","blue","purple"];
                        lenc = colors.length;
            
                        const randColor = Math.floor(Math.random() * lenc);
                        const changeBg = (randColor, colors[randColor]);
        
                        cbg.style = `top: 0; position: absolute; z-index: 10; width: 100%; height: 100%; background: ${changeBg};`;
                        maroky.style = `
                            position: absolute;
                            z-index: 11;
                            width: 20%;
                            height: 20%;
                            top: ${posym}px;
                            left: ${posxm}px;
                        `;
                        coro.style = `
                            position: absolute;
                            z-index: 11;
                            width: 20%;
                            height: 20%;
                            top: ${posyc}px;
                            left: ${posxc}px;
                        `;
                    }, k * 100);
                }
            }
        }, j * 10);
    }
}

marokyPleše('https://media.discordapp.net/attachments/993253699650601055/1006684759499493536/Picsart_22-08-10_00-05-38-075.png','https://media.discordapp.net/attachments/993253699650601055/1006684791762079834/Picsart_22-08-08_22-56-14-574.png?width=384&height=671');
