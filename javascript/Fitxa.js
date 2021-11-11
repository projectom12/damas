class Fitxa{

    constructor(numberFila, numberColumna, booleanReina, stringColor){
        this._numberFila = numberFila;
        this._numberColumna = numberColumna;
        this._booleanReina = booleanReina;
        this._stringColor = stringColor;
    }
    
    get numberFila(){
        return this._numberFila;
    }
    set numberFila(numberFila){
        this._numberFila = numberFila;
    }

    get numberColumna(){
        return this._numberColumna;
    }

    set numberColumna(numberColumna){
        this._numberColumna = numberColumna;
    }

    get booleanReina(){
        return this._booleanReina;
    }

    set booleanReina(booleanReina){
        this._booleanReina = booleanReina;
    }

    get stringColor(){
        return this._stringColor;
    }

    set stringColor(stringColor){
        this._stringColor = stringColor;
    }

    comprovaDesti(){

    }
}

    
