class TableRound{
    static  margen = 15;
    static radio = 35;

    static generateTableRound(persons, capacity, color){
        this.radio = this.getRadioCircle(capacity, persons)/3;
        return `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <circle cx="${this.margen+this.radio}" cy="${this.margen+this.radio}" r="${this.radio-5}" fill="red" />
            ${this.fillChair(persons, capacity)}
        </svg>`;
    }

    static fillChair = (personNum, capacity) => {
        const resp = this.distribuirComensales(personNum, capacity).map((person, index) => {
            return `<image  key="${index}" width="${person.w}px" height="${person.h}px" x="${person.x??0}" y="${person.y??0}"  transform="rotate(${person.deg}, ${person.x + (person.w/2)}, ${person.y + (person.h/2)})" href="${index+1 > personNum ? 'https://olappco.blob.core.windows.net/root/person-transparent.svg' : 'https://olappco.blob.core.windows.net/root/person-normal.svg'}" />`;
        });
        return resp.join('');
    }

    static getGrados = (angulo) =>{
        const num = (angulo * Math.PI) / 180;
        const numStr = num.toString();
        const index = numStr.indexOf('.');
        if (index !== -1) {
            return parseFloat(numStr.substring(0, index + 3));
        }
        return num;
    }
    
    static distribuirComensales = (numPersons, capacity) => {
        numPersons = numPersons > capacity ? numPersons : capacity;
        const puntosContacto=[];
        for (let angle = 0; angle < 360; angle += 360 / numPersons) {
            const ang = this.getGrados(angle);
            puntosContacto.push({
                w: 30,
                h: 30,
                x:((this.radio * Math.cos(ang))+this.radio+this.margen)-15,
                y:((this.radio * Math.sin(ang))+this.radio+this.margen)-15,
                deg:angle,
                index:null
            });
        }
        return puntosContacto
    }

    static getRadioCircle = (capacity, numPeople) => {
        if(capacity < numPeople) capacity = numPeople;
        const base = capacity <= 6 ? 7 : capacity;
        const multiplicador = 95;
        const r = (base*multiplicador)/(2*Math.PI);
        return r;
    }
    
}