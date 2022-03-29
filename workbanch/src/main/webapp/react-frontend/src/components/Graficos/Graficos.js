import './Grafico.css';
import React from 'react';
import grafico1 from './grafico1.png';
import grafico2 from './grafico2.png';
import grafico3sul from './grafico3-sul.png';
import grafico14 from './grafico14.png';
import grafico from './grafico.png';
const Graficos = () => {
    return(

<section className="gb">
    <section className="grafico">
        <div className="title">
            
            <h1 className="h1gb">Nossos Gráficos</h1>
            
        </div>
        <div className="graficobox">
            <img className="img-grafico" src={grafico} alt="Gráficos"></img>
            <h2 className="hgb">Aqui você poderá verificar em porcentagem, a percepção das pessoas que transitam, moram ou trabalham em determinados bairros e suas percepções sobre injúria racial e racismo. </h2>
        </div>
        <div className='h2grafico'>

        
        <h2 >índice de Pessoas que sofreram racismo</h2>
        <img  className="img-grafico" src={grafico1} alt="grafico ato de racismo"></img>
        <h2 >índice de Pessoas que precensiaram </h2>
        <img  className="img-grafico" src={grafico2} alt="grafico pessoas que precensiaram"></img>
        <h2 >Zona sul</h2>
        <img  className="img-grafico" src={grafico3sul} alt="zona sul"></img>
        <h2 >Zona norte</h2>
        <img  className="img-grafico" src={grafico14} alt="zona norte"></img>

        </div>
    </section>
</section>
   );
};

export default Graficos;