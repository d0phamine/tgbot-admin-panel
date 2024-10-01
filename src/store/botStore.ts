import { makeAutoObservable } from 'mobx';

export interface botStoreInterface {
    type:string | null
}

export class botStore{
    public botData:botStoreInterface = {
        type: "normal",
    }

    constructor(){
        makeAutoObservable(this)
    }

    public setType(type:string){
        this.botData.type = type
    }
}