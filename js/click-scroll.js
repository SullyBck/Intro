// Tableau d'objets pour les sections
var sections = [
    {id: 'accueil', name: 'Accueil'},
    {id: 'presentation', name: 'Présentation'},
    {id: 'informatique', name: 'Informatique'},
    {id: 'video', name: 'Vidéo'},
    {id: 'programmation', name: 'Programmation'}
  ];
  
  // Parcourir les sections et ajouter des écouteurs d'événements de défilement et de clic
  $.each(sections, function(index, section) {
    $(document).scroll(function(){
      var offsetSection = $('#' + section.id).offset().top - 90;
      var docScroll = $(document).scrollTop();
      var docScroll1 = docScroll + 1;
  
      if (docScroll1 >= offsetSection) {
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
        $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
        $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
      }
    });
  
    $('.click-scroll[href="#' + section.id + '"]').click(function(e){
      var offsetClick = $('#' + section.id).offset().top - 90;
      e.preventDefault();
      $('html, body').animate({
        'scrollTop':offsetClick
      }, 300)
    });
  });
  
  // Définir le lien de la barre de navigation active lors du chargement de la page
  $(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
  });