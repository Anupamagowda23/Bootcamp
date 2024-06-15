document.addEventListener('DOMContentLoaded',()=>{
    loadPreference();
});
function savePreferences(){
    const theme =document.getElementById('theme').value;
    const fontSize=document.getElementById('fontSize').value;
    localStorage.setItem('theme',theme);
    localStorage.setItem('frontSize',frontSize);
    alert('perference saved!');
    applyPreference();

}
function loadPreference(){
    const theme=localStorage.getItem('theme');
    const frontsize=localStorage.getItem('frontsize');
    if(theme){
        document.getElementById('theme').value=theme;
    
    }
    if(frontSize){
        document.getElementById('frontSize').value=frontSize;

    }
    applyPreference();
}
function appplyPreference(){
    const theme=localStorage.getItem('theme');
    const frontSize=localStorage.grtItem('frontsize');
    if(theme){
        document.body.className=theme;
    
    }
    if(frontSize){
        document.body.style.fontsize="28px";

    }

}