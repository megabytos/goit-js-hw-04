const profile = {
    username: 'Jacob',
    playTime: 300,
    changeUsername(newName) {
        if (typeof newName === 'string') {
            this.username = newName;
        }
    },
    updatePlayTime(hours) {
        if (typeof hours === 'number') {
            this.playTime += hours;
        }
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    },
};

console.log(profile.getInfo());

profile.changeUsername('Marco');
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
