let card
function getDigimons(done){
    const results = fetch("https://digimon-api.vercel.app/api/digimon");
    results.then(
        response=> response.json()
    ).then(
        data=>{
            done(data)
        }
    )


}

getDigimons(data=>{
    data.forEach(digimon => {
        const section = document.createRange().createContextualFragment(
            `<div class="targeta" id="${digimon.name}">
                <div class="targeta__img" >
                    <img src="${digimon.img}" alt="digimon">
                </div>
                <div class='tageta__info'>
                    <p class="targeta__info-nombre">${digimon.name}</p>
                    <p class="targeta__info-nivel">${digimon.level}</p>
                </div>
            </div>
            `
        );
        switch (digimon.level) {
            case 'Fresh':
                document.getElementById('fresh').append(section)
                break;
            case 'In Training':
                document.getElementById('training').append(section)
                break;
            case 'Rookie':
                document.getElementById('rookie').append(section)
                break;
            case 'Champion':
                document.getElementById('champion').append(section)
                break;
            case 'Armor':
                document.getElementById('armor').append(section)
                break;
            case 'Mega':
                document.getElementById('mega').append(section)
                break;
            case 'Ultimate':
                document.getElementById('ultimate').append(section)
                break;
        }
    });
})