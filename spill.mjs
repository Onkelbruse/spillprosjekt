//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(forside);

function nesteSide(enKnapp, enSide) {
    Actions.Click(enKnapp, () => {
        GaaTil(enSide);
    })
}
// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function forside() {
    const bakgrunn = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });
    const velkommenLyd = new Blocks.Sound("lyder/intro.mp3", { loop: false, auto: false });

    // Starter lyden når brukeren klikker på bakgrunnsbildet
    Actions.Click(bakgrunn, () => {
        velkommenLyd.start();
        setTimeout(visKnapp, 0, 1); // Vis knappen etter 4 sekunder når musikken starter
    });

    // Viser velkomstteksten hele tiden
    const velkommen = new Blocks.Text("Hjelp Bonden!", {
        style: "overskrift",
        x: 400,
        y: 150,
        width: "100%",
        height: 20
    });

    function visKnapp() {
        const knapp = new Blocks.Text("Trykk her for å starte spillet", { style: "startknapp", x: 330, y: 500, width: "100%", height: 50 });

        Actions.Click(knapp, () => {
            GaaTil(skjerm2);
        })

    }
}

function skjerm2() {

    const bakgrunnsbilde = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });
    const ku = new Blocks.Image("bilder/ku.png", { x: 150, y: 150, width: 250, height: 250 });
    const sau = new Blocks.Image("bilder/sau.png", { x: 450, y: 150, width: 250, height: 250 });
    const høne = new Blocks.Image("bilder/hone.png", { x: 450, y: 400, width: 250, height: 250 });
    const leiseg = new Blocks.Image("bilder/leiseg.png", { x: 800, y: 150, width: 250, height: 250 });
    const smil = new Blocks.Image("bilder/smil.png", { x: 150, y: 400, width: 250, height: 250 });
    const gris = new Blocks.Image("bilder/gris.png", { x: 800, y: 400, width: 250, height: 250 });

    nesteSide(ku, tilfeldigSpm);
    nesteSide(sau, tilfeldigSpm);
    nesteSide(gris, tilfeldigSpm);
    nesteSide(høne, tilfeldigSpm);
    nesteSide(leiseg, feilside);
    nesteSide(smil, riktigSide);


}

function tilfeldigSpm() {
    const alleSpm = [spm1, spm2, spm3, spm4, spm5, spm6, spm7, spm8, spm9, spm10, spm11, spm12, spm13, spm14, spm15, spm16, spm17, spm18,
        spm19, spm20, spm21, spm22, spm23, spm24, spm25, spm26, spm27, spm28, spm29, spm30, spm31, spm32, spm33, spm34, spm35, spm36, spm37,
        spm38, spm39, spm40]
    const tilfeldigtall = Math.floor(Math.random() * alleSpm.length);
    console.log(tilfeldigtall);
    alleSpm[tilfeldigtall]();
}



function sporsmol() {
    const tittel = new Blocks.Text("Dette er et spørsmål", { style: "overskrift", x: 400, y: 50, width: "100%", height: 20 });
    const alnternativ1 = new Blocks.Text("Alnternativ 1", { style: "overskrift", x: 400, y: 100, width: "100%", height: 20 });
    const alnternativ2 = new Blocks.Text("Alnternativ 2", { style: "overskrift", x: 400, y: 200, width: "100%", height: 20 });
    const alnternativ3 = new Blocks.Text("Alnternativ 3", { style: "overskrift", x: 400, y: 300, width: "100%", height: 20 });


    Actions.Click(alnternativ1, () => {
        GaaTil(riktigSide)
    })
    Actions.Click(alnternativ2, () => {
        GaaTil(feilside)
    })
    Actions.Click(alnternativ3, () => {
        GaaTil(feilside)
    })

}

function riktigSide() {

    const bakgrunn = new Blocks.Image("bilder/riktigbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });
    const tittel = new Blocks.Text("Riktig!", { style: "overskrift", x: 500, y: 100, width: "100%", height: 20 });
    nesteSide(bakgrunn, skjerm2)


}

function feilside() {
    const bakgrunn = new Blocks.Image("bilder/feil.jpeg", { x: 0, y: 0, width: 1180, height: 820 });
    const tittel = new Blocks.Text("Feil", { style: "overskrift", x: 600, y: 350, width: "100%", height: 20 });
    nesteSide(bakgrunn, skjerm2)



}

function visSpørsmål(aTitle, alt1, alt2, alt3, correctnumber) {
    const tittel = new Blocks.Text(aTitle, { style: "kortTittel", x: 50, y: 50, width: "100%", height: 20 });
    const alternativ1 = new Blocks.Text(alt1, { style: "kortText", x: 50, y: 350, width: "100%", height: 20 });
    const alternativ2 = new Blocks.Text(alt2, { style: "kortText", x: 50, y: 450, width: "100%", height: 20 });
    const alternativ3 = new Blocks.Text(alt3, { style: "kortText", x: 50, y: 550, width: "100%", height: 20 });

    const allOptions = [alternativ1, alternativ2, alternativ3];

    for (let i = 0; i < allOptions.length; i++) {
        Actions.Click(allOptions[i], () => {
            if (i === correctnumber - 1) {
                GaaTil(riktigSide);
            } else {
                GaaTil(feilside);
            }
        });
    }
}

function spm1() {
    const background = new Blocks.Image("bilder/altbakgrunn.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Her ser jeg en høne og en ku. Hvor mange blir det til sammen?", "2", "4", "1", 1);

}

function spm2() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva sier kua?", "Mø", "Mjau", "Nøff Nøff", 1);

}

function spm3() {
    const background = new Blocks.Image("bilder/Sporsmal3bilde.jpeg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvilken form har taket på låven?", "Trekant", "Firkant", "Sirkel", 1);

}

function spm4() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvilket dyr legger eggene vi spiser?", "Høne", "Ku", "Sau", 1);

}

function spm5() {
    const background = new Blocks.Image("bilder/Sporsmal5bilde.jpeg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor mange egg har høna lagt?", "4", "3", "5", 1);

}

function spm6() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor mange hjul har en traktor?", "4", "5", "6", 1);

}

function spm7() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvilken bokstav begynner ordet ´Hest´ på? ", "H", "U", "M", 1);

}

function spm8() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva sier sauen?", "Bææ", "Møø", "Nøff Nøff", 1);

}

function spm9() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor mange sider har innheiningen til kua?", "4", "5", "3", 1);

}

function spm10() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 100, y: 100, width: 1180, height: 820 });

    visSpørsmål("Hvem er minst av disse dyrene?", "Høne", "Ku", "Gris", 1);

}

function spm11() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvem er størst av disse dyrene?", "Ku", "Gris", "Mus", 1);

}

function spm12() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvilken figur har innheiningen til kua?", "Firkant", "Sirkel", "Trekant", 1);

}

function spm13() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvilken figur har innheiningen til grisen?", "Sekskant", "Firkant", "Trekant", 1);

}

function spm14() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvilken figur har innheiningen til høna?", "Høne", "Firkant", "Sirkel", 1);

}

function spm15() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvilken figur har innheingingen til sauen?", "Sirkel", "Trekant", "Sekskant", 1);

}

function spm16() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva rimer på gris?", "Fis", "Nøff", "Voff", 1);

}

function spm17() {
    const background = new Blocks.Image("bilder/Sporsmal17bilde.jpeg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor mange sauer ser du på bildet?", "4", "2", "3", 1);

}

function spm18() {
    const background = new Blocks.Image("bilder/Sporsmal18bilde.jpeg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor mange griser ser du på bildet?", "5", "3", "1", 1);

}

function spm19() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva rimer på egg?", "Skjegg", "Høne", "Sjokolade", 1);

}

function spm20() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva liker kua å spise?", "Gress", "Sjokolade", "Iskrem", 1);

}

function spm21() {
    const background = new Blocks.Image("bilder/Sporsmal21bilde.jpeg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor mange egg har høna lagt?", "2", "7", "4", 1);

}

function spm22() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva rimer på høy?", "Gøy", "Kjedelig", "Potetgull", 1);

}

function spm23() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva har sauen på seg?", "Ull", "Fjær", "Sjokolade", 1);

}

function spm24() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor på kua er juret?", "Under", "Over", "På siden", 1);

}

function spm25() {
    const background = new Blocks.Image("bilder/bondebilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva heter bonden?", "Synne Sol", "Ronny Råtass", "Tone Tomat", 1);

}

function spm26() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva på gården er kua mest redd for?", "Gressklipperen", "Melkemaskinen", "Høye lyder", 1);

}

function spm27() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva gjør gårdskatten når ingen ser den?", "Drikker melk fra bøtta til bonden",
        "Planlegger hvordan den skal ta musene", "Leker med hønene", 1);

}

function spm28() {
    const background = new Blocks.Image("bilder/sjakkGris.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva liker grisen best å gjøre?", "Bade i gjørma", "Spille sjakk med kua", "Lese for hønene", 1);

}

function spm29() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva liker hesten best å spise?", "Epler", "Egg", "Nugatti", 1);

}

function spm30() {
    const background = new Blocks.Image("bilder/honerPaBadet.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor på gården bor hønene?", "I hønsehuset", "Langt oppi trærne", "På badet", 1);

}

function spm31() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva bruker man traktoren til?", "Å pløye jorda", "Male låven", "Lage iskrem", 1);

}

function spm32() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva legger hønene?", "Egg", "Poteter", "Gulv", 1);

}

function spm33() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva kaller vi babyen til kua?", "Kalv", "Kattunge", "Kylling", 1);

}

function spm34() {
    const background = new Blocks.Image("bilder/haneMelk.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva sier hanen?", "Kykkelikyy!", "Kan jeg få et glass melk?", "Møøø", 1);

}

function spm35() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva er det som flyr og lager honning?", "Bie", "Måke", "Helikopter", 1);

}

function spm36() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva bruker bonden til å klippe gresset?", "Gressklipperen", "Sag", "Hammer", 1);

}

function spm37() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hva heter babyen til sauen?", "Lam", "Babysau", "Valp", 1);

}

function spm38() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor mange høner er det på spillbrettet?", "5", "7", "4", 1);

}

function spm39() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 100, y: 100, width: 1180, height: 820 });

    visSpørsmål("Hvor mange griser er det på spillbrettet?", "5", "3", "8", 1);

}

function spm40() {
    const background = new Blocks.Image("bilder/bakgrunnsbilde.jpg", { x: 0, y: 0, width: 1180, height: 820 });

    visSpørsmål("Hvor mange sauer er det på spillbrettet?", "5", "6", "2", 1);

}












