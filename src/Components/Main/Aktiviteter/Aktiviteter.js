import React, { useState } from 'react'
import AktivitetCard from './AktivitetCard'

const Aktiviteter = () => {
     // State
     const [aktiviteter] = useState([
        {img: 'Aktivitet1.jpg', overskrift: 'Møllerup Hamp', resume: 'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.', id: 1},
        {img: 'Aktivitet2.jpg', overskrift: 'Møder & events', resume: 'Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.', id: 2},
        {img: 'Aktivitet3.jpg', overskrift: 'Fest på kroen', resume: 'Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.', id: 3},
        {img: 'Aktivitet4.jpg', overskrift: 'Rundvisninger', resume: 'Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. ', id: 4},
        {img: 'Aktivitet5.jpg', overskrift: 'Hamp hudpleje', resume: 'Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.', id: 5},
        {img: 'Aktivitet6.jpg', overskrift: 'Hamp fødevarer', resume: 'Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup.', id: 6},
        {img: 'Aktivitet7.png', overskrift: 'Møllerup bogen', resume: 'Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup.', id: 7},
        {img: 'Aktivitet8.jpg', overskrift: 'Møllerup jagt', resume: 'Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.', id: 8},
        {img: 'Aktivitet9.jpg', overskrift: 'Ferie for 40', resume: 'Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool', id: 9},
        {img: 'Aktivitet10.jpg', overskrift: 'Bolig på landet', resume: 'Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.', id: 10},
        {img: 'Aktivitet11.jpg', overskrift: 'Hestepension', resume: 'Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.', id: 11},
        {img: 'Aktivitet12.jpg', overskrift: 'Verdensballetten', resume: 'Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup.', id: 12},
      ]);


    return ( 
        <div className="Aktiviteter">
            <h3>Møllerup Gods tilbyder en perlerække af muligheder</h3>
            <p className="mb-4">Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
            <AktivitetCard alleAktiviteterProp={aktiviteter}/>
        </div>
     );
}
 
export default Aktiviteter;