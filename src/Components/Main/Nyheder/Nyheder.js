import React, { useState } from 'react'
import NyhedMain from './NyhedMain'
import NyhedCard from './NyhedCard'

const Nyheder = () => {
    // State
    const [nyheder] = useState([
        {img: 'Nyhed1.png', overskrift: 'Køb vores hampeprodukter', resume: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..', id: 1},
        {img: 'Nyhed2.png', overskrift: 'Verdensballetten 2019', resume: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods', id: 2},
        {img: 'Nyhed3.png', overskrift: 'Historien om Møllerup Gods', resume: 'Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.', id: 3},
        {img: 'MainNyhed.jpg', overskrift: 'Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften', resume: 'Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020', id: 4},
      ]);


    return ( 
        <div>
            <NyhedMain alleNyhederProp={nyheder}/>
            <NyhedCard alleNyhederProp={nyheder}/>
        </div>
     );
}
 
export default Nyheder;