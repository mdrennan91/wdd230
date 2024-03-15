document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('eventBanner');
  
    function closeBanner() {
      banner.style.display = 'none';
    }
  
    window.closeBanner = closeBanner;
  
    function shouldShowBanner() {
      const today = new Date();
      const dayOfWeek = today.getDay(); 
      return dayOfWeek >= 1 && dayOfWeek <= 3;
    }
  
    if (shouldShowBanner()) {
      banner.style.display = 'block';
    }
  });