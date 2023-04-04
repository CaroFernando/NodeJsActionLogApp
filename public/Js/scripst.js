var language; 
var lg;
function getLanguage() {
    (localStorage.getItem('lg') == null) ? setLanguage('es') : false;
    $.ajax({ 
    dataType: "json",
    url:  'language/' +  localStorage.getItem('lg') + '.json', 
    async: false,
    success: function (lang) { language = lang } });
    }

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    localStorage.setItem('lg', lang);
}
function toggleLanguage(){
    (localStorage.getItem('lg') == 'es') ? setLanguage('en') : setLanguage('es');
    getLanguage();
    setTexts();
}
function setTexts() {
    $('.navBarChangeLanguage').text(language.changeLanguage);
    $('.navBarMainPage').text(language.mainPage);
    $('.navBarSkills').text(language.skills);
    $('.navBarPractices').text(language.practices);
    $('.navBarExperience').text(language.experience);
    $('.navBarContact').text(language.contact);
    $('.network').text(language.networking);
    $('.about').text(language.about);
    $('#indexTitle').text(language.mainPage);
    $('#skillsTitle').text(language.skills);
    $('#practicesTitle').text(language.practices);
    $('#experienceTitle').text(language.experience);
    $('#contactTitle').text(language.contact);
    $('#indiceTitulo').text(language.indexTitle);
    $('#habilidadesTitulo').text(language.skillsTitle);
    $('#practicasTitulo').text(language.practicesTitle);
    $('#experienciaTitulo').text(language.experienceTitle);
    $('#contactoTitulo').text(language.contactTitle);
    $('#myDescription').text(language.description);
    $('#proLang').text(language.proLang);
    $('#langu').text(language.langu);
    $('#dom').text(language.dom);
    $('.5y').text(language.fivey);
    $('.2y').text(language.twoy);
    $('.3m').text(language.threem);
    $('.ver').text(language.view);
    $('#xp0').text(language.xp0);
    $('#xp1').text(language.xp1);
    $('#xp2').text(language.xp2);
    $('#contactT').text(language.contactT);
    $('#nombre').text(language.nombre);
    $('#correo').text(language.correo);
    $('#date').text(language.date);
    $('#desc').text(language.desc);
    $('#ctFrm').text(language.ctFrm);
    $('#pr0').text(language.pr0);
    $('#pr0d').text(language.pr0d);
    $('#pr1').text(language.pr1);
    $('#pr1d').text(language.pr1d);
    $('#pr2').text(language.pr2);
    $('#pr2d').text(language.pr2d);
    $('#pr3').text(language.pr3);
    $('#pr3d').text(language.pr3d);
    $('#pr4').text(language.pr4);
    $('#pr4d').text(language.pr4d);
    $('#pr5').text(language.pr5);
    $('#pr5d').text(language.pr5d);
    $('#pr6').text(language.pr6);
    $('#pr6d').text(language.pr6d);
    $('#pr7').text(language.pr7);
    $('#pr7d').text(language.pr7d);
    $('#pr8').text(language.pr8);
    $('#pr8d').text(language.pr8d);
    $('#pr9').text(language.pr9);
    $('#pr9d').text(language.pr9d);
    $('#pr10').text(language.pr10);
    $('#pr10d').text(language.pr10d);
    $('#pr11').text(language.pr11);
    $('#pr11d').text(language.pr11d);
    $('#pr12').text(language.pr12);
    $('#pr12d').text(language.pr12d);
    $('#pr13').text(language.pr13);
    $('#pr13d').text(language.pr13d);
    $('#pr14').text(language.pr14);
    $('#pr14d').text(language.pr14d);
    $('#pr15').text(language.pr15);
    $('#pr15d').text(language.pr15d);
    $('#pr16').text(language.pr16);
    $('#pr16d').text(language.pr16d);
    $('#pr17').text(language.pr17);
    $('#pr17d').text(language.pr17d);
    $('#pr18').text(language.pr18);
    $('#pr18d').text(language.pr18d);
    $('#ac1').text(language.ac1);
    $('#ac1d').text(language.ac1d);
    $('#ex2').text(language.ex2);
    $('#ex2d').text(language.ex2d);
    $('#pr19').text(language.pr19);
    $('#pr19d').text(language.pr19d);
    $('#pr20').text(language.pr20);
    $('#pr20d').text(language.pr20d);
    $('#pr21').text(language.pr21);
    $('#pr21d').text(language.pr21d);
    $('#pr22').text(language.pr22);
    $('#pr22d').text(language.pr22d);
}
$(document).ready(function(){
    getLanguage();
    setTexts();
});
function validaredad(){
    var box = document.getElementById("edadbox");
    if(box.checked == true){
        alert("Ok");
    }else{
        alert("No");
    }
}