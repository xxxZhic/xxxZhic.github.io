window.addEventListener('DOMContentLoaded', (event) => {
    // 在DOM加载完成后执行的代码
    
    // 通过JavaScript添加照片和视频到相册
    
    // 示例代码：
    
    // 获取相册容器
    const gallery = document.getElementById('gallery');
    
    // 创建照片元素
    const photo = document.createElement('img');
    photo.src = 'path_to_your_photo.jpg';
    photo.alt = 'photos';
    
    // 创建视频元素
    const video = document.createElement('video');
    video.src = 'path_to_your_video.mp4';
    video.controls = true;
    
    // 将照片和视频添加到相册容器
    gallery.appendChild(photo);
    gallery.appendChild(video);
  });
  
  