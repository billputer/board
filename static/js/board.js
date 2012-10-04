
var sound_meta = {
  obama_complicated: 'OBAMA/OBAMA_COMPLICATED.mp3',
  obama_fries: "OBAMA/OBAMA_FRIES.mp3",
  obama_ignorant: "OBAMA/OBAMA_IGNORANT.mp3",
  obama_number: "OBAMA/OBAMA_NUMBER.mp3",
  obama_that_guy: "OBAMA/OBAMA_THAT_GUY.m4a"
}

soundManager.setup({
  url: 'static/swf/',
  flashVersion: 9,
  useFlashBlock: true,
  onready: function() {
    sounds = {};
    for(var sound_id in sound_meta){
      console.log(sound_id);
      sounds[sound_id] = soundManager.createSound({
        id: sound_id,
        url: sound_meta[sound_id]
      });
      
    }
  }
});
