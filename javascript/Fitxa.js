class Fitxa{

    constructor(booleanReina, stringColor,id){
        this._booleanReina = booleanReina;
        this._stringColor = stringColor;
        this._id = id;
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

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

}

    
