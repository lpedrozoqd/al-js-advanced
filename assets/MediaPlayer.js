function MediaPlayer(config){
    this.media = config.el
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.stop = function () {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused){
        this.play();
    }else{
        this.stop();
    }
}

export default MediaPlayer;