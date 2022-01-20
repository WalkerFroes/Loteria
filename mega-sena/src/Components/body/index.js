import React from "react";
import { numeros } from './styled';

class Body extends React.Component {
    render () {
        return (
            <><div id="fundo" style="text -aline: center;">
                <h1>Mega Sena</h1>
            </div>
            <div id="numerosMegaSena">
                <span id="um" class="numeros"> 01 </span>
                <span id="dois" class="numeros"> 02 </span>
                <span id="tres" class="numeros"> 03 </span>
                <span id="quatro" class="numeros"> 04 </span>
                <span id="cinco" class="numeros"> 05 </span>
                <span id="seis" class="numeros"> 06 </span>
                <span id="sete" class="numeros"> 07 </span>
                <span id="outo" class="numeros"> 08 </span>
                <span id="nove" class="numeros"> 09 </span>
                <span id="dez" class="numeros"> 10 </span>
                
                <span id="onze" class="numeros"> 11 </span>
                <span id="doze" class="numeros"> 12 </span>
                <span id="treze" class="numeros"> 13 </span>
                <span id="qutorze" class="numeros"> 14 </span>
                <span id="quinze" class="numeros"> 15 </span>
                <span id="dezesseis" class="numeros"> 16 </span>
                <span id="dezessete" class="numeros"> 17 </span>
                <span id="dezoito" class="numeros"> 18 </span>
                <span id="dezenove" class="numeros"> 19 </span>
                <span id="vinte" class="numeros"> 20 </span>

                <span id="vinte-e-um" class="numeros"> 21 </span>
                <span id="vinte-e-dois" class="numeros"> 22 </span>
                <span id="vinte-e-tres" class="numeros"> 23 </span>
                <span id="vinte-e-quatro" class="numeros"> 24 </span>
                <span id="vinte-e-cinco" class="numeros"> 25 </span>
                <span id="vinte-e-seis" class="numeros"> 26 </span>
                <span id="vinte-e-sete" class="numeros"> 27 </span>
                <span id="vinte-e-oito" class="numeros"> 28 </span>
                <span id="vinte-e-nove" class="numeros"> 29 </span>
                <span id="trinta" class="numeros"> 30 </span>

                <span id="trinta-e-um" class="numeros"> 31 </span>
                <span id="trinta-e-dois" class="numeros"> 32 </span>
                <span id="trinta-e-tres" class="numeros"> 33 </span>
                <span id="utrinta-e-quatro" class="numeros"> 34 </span>
                <span id="trinta-e-cinco" class="numeros"> 35 </span>
                <span id="trinta-e-seis" class="numeros"> 36 </span>
                <span id="trinta-e-sete" class="numeros"> 37 </span>
                <span id="trinta-e-oito" class="numeros"> 38 </span>
                <span id="trinta-e-nove" class="numeros"> 39 </span>
                <span id="quarenta" class="numeros"> 40 </span>

                <span id="quarenta-e-um" class="numeros"> 41 </span>
                <span id="quarenta-e-dois" class="numeros"> 42 </span>
                <span id="quarenta-e-tres" class="numeros"> 43 </span>
                <span id="quarenta-e-quatro" class="numeros"> 44 </span>
                <span id="quarenta-e-cinco" class="numeros"> 45 </span>
                <span id="quarenta-e-seis" class="numeros"> 46 </span>
                <span id="quarenta-e-sete" class="numeros"> 47 </span>
                <span id="quarenta-e-oito" class="numeros"> 48 </span>
                <span id="quarenta-e-nove" class="numeros"> 49 </span>
                <span id="cinquenta" class="numeros"> 50 </span>

                <span id="cinquenta-e-um" class="numeros"> 51 </span>
                <span id="cinquenta-e-dois" class="numeros"> 52 </span>
                <span id="cinquenta-e-tres" class="numeros"> 53 </span>
                <span id="cinquenta-e-quatro" class="numeros"> 54 </span>
                <span id="cinquenta-e-cinco" class="numeros"> 55 </span>
                <span id="cinquenta-e-seis" class="numeros"> 56 </span>
                <span id="cinquenta-e-sete" class="numeros"> 57 </span>
                <span id="cinquenta-e-oito" class="numeros"> 58 </span>
                <span id="cinquenta-e-nove" class="numeros"> 59 </span>
                <span id="sessenta" class="numeros"> 60 </span>
                                

            </div>
            <div id="numerosSorteados">

            </div>
            <div id="acertos">

            </div>
            
            <input type="button" id="botaoJogar" class="botao" value="Jogar" disabled/>
            <input type="button" id="botaoGerarJogo" class="botao" value="Gerar jogo"/>
            <input type="button" id="botaoLimpar" class="botao" value="Limpar"/>

            </>
        );
      }
    }

export default Body;