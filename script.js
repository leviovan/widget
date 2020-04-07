window.onload = function() {
    var blockbanner = document.createElement('div');
    blockbanner.style.width = '230px';
    blockbanner.style.height = '150px';  
    blockbanner.style.bottom = 0;
    blockbanner.style.left = 0;
    blockbanner.style.position = 'fixed';
    blockbanner.id = 'banner';
    document.body.appendChild(blockbanner);
    document.getElementById("banner").style.zIndex = "1";
    var znachenie = document.getElementById('banner');

    var blocklink = document.createElement('div');
    blocklink.style.width = '230px';
    blocklink.style.height = '130px';
    blocklink.style.position = 'fixed';
    blocklink.style.bottom = '100px';
    blocklink.style.left = 0;
    blocklink.id = 'linker';
    blocklink.style.display = 'none';
    document.body.appendChild(blocklink);
    document.getElementById("linker").style.zIndex = "2";
    var znachenie = document.getElementById('linker');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://lawyerforyou.ru/api/banner', false);
    xhr.send();

    var context=JSON.parse(xhr.responseText);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        path='https://lawyerforyou.ru'+context['small_image']
        blockbanner.style.width = '80px';
        blockbanner.style.height = '80px'; 
        var size_link=80; 
        var marginBottomLink="-20%"
    }
    else
    {
        path='https://lawyerforyou.ru'+context['full_image']
        var size_link=230; 
        var marginBottomLink="5%"
    }
    xhr.abort();

    xhr=new this.XMLHttpRequest();
    xhr.open('GET','https://lawyerforyou.ru/api/link',false);
    xhr.send();

    var contextLink=JSON.parse(xhr.responseText);

    blockbanner.style.background = 'url("' + path + '") no-repeat 100%';
    
    blocklink.innerHTML =  '<a  href=" '+contextLink['android']+' "><img width="'+size_link+'" src="GooglePlay.png"></a>';
    blocklink.innerHTML += '<br>';
    blocklink.innerHTML += '<a href=" '+contextLink['ios']+' "> <img width="'+size_link+'" src="AppStore.png"></a>';
    blocklink.style.marginBottom=marginBottomLink;
}

document.addEventListener("click", function(e) {
    if (e.target.id == "banner") {
        var poisk = document.getElementById('linker');
        poisk.style.display = 'block';
    }
});