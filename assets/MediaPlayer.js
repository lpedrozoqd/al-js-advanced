function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin =>{
        //Este 'this' es una instancia de la función 'MediaPlayer'
        plugin.run(this);
    });

}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.stop = function () {
    this.media.pause();
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.mute = false;
}


MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused){
        this.play();
    }else{
        this.stop();
    }
}

export default MediaPlayer;