class CalcController {

    constructor() {
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._DateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }
    initialize() {
        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }
    //------------buttons   
    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");


        buttons.forEach((btn ,index)=> {
            btn.addEventListener('click', e =>{

                console.log(btn.className.baseVal.replace("btn-",""));
    
            });
        })

    }

    //---------data e hora
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        
        })

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    };

    //----------set hora e data-------
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }
    set displayDate(value) {
        return this._DateEl.innerHTML = value;
    }
    //----------get hora e data-------
    get displayTime() {
        return this._timeEl.innerHTML;
    }
    get displayDate() {
        return this._DateEl.innerHTML;
    }
    //----------get resultado calc e data nova-------
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    get currentDate() {
        return new Date();
    }

    //----------set resultado calc e data nova-------
    set currentDate(valor) {
        this._currentDate = valor;
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = valor;
    }
}