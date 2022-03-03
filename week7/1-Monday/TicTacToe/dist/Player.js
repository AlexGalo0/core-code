"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(nickname) {
        this.nickname = nickname;
    }
    get playerNickname() {
        return this.nickname;
    }
    set playerNickname(nickname) {
        this.nickname = nickname;
    }
}
exports.Player = Player;
