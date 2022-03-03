
export class Player {

    constructor(private nickname:string) {}

    get playerNickname() {
        return this.nickname ;
    } 
    set playerNickname(nickname) {
        this.nickname=nickname;
    }

}