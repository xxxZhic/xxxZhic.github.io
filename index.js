window.addEventListener('DOMContentLoaded', (event) => {

    const gallery = document.getElementById('gallery');
    
  
    const photo = document.createElement('img');
    photo.src = 'photos/IMG_4787.jpeg';
    photo.alt = 'photos';
    

    const video = document.createElement('video');
    video.src = 'path_to_your_video.mp4';
    video.controls = true;
    

    gallery.appendChild(photo);
    gallery.appendChild(video);
  });
  
  