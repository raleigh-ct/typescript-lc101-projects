import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass ( items: Payload[] ): number {
        let allItemsMass: number = 0;
        for (let i=0; i < items.length; i++) {
            allItemsMass += items[i].massKg;
            return allItemsMass;
        }
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)===true){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronauts: Astronaut): boolean {
        if(this.canAdd(astronauts)){
            this.astronauts.push(astronauts);
            return true;
        } else {
            return false;
        }
    }

}

