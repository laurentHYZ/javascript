///////////////////////////////////////////////////////////////////////////////
//  demander                              some comment                               //
///////////////////////////////////////////////////////////////////////////////
    function showWhenClicked() {
        const thumbsUp = document.getElementById('appear');
      const audio = new Audio('./Music/example.mp3'); // Replace with your sound file path
      audio.play();
      //a third comment////////////////////////////////////////////////////////
      appear.style.display = 'block';
      appear.style.transform = 'scale(2.5)';
      setTimeout(() => {
        appear.style.transform = 'scale(2)';
      }, 500);

      setTimeout(() => {
        appear.style.display = 'none';
      }, 2000);
    }
//another comment, inline this time.///////////////////////////////////////////
