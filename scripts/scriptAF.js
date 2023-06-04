let contador = 2;
document.addEventListener('click', event =>{
    element = event.target;

    if(element.classList.contains('addM')){
        let tabela = {
            meses: document.querySelector('.meses'),
            vendas: document.querySelector('.vendas'),
            dv: document.querySelector('.dv'),
            df: document.querySelector('.df'),
            lucro: document.querySelector('.lucro'),
            meta: document.querySelector('.meta')
        };
        
        if(contador < 12){
            contador++;

            tabela.meses.appendChild(createTH());
            tabela.vendas.appendChild(createTD());
            tabela.dv.appendChild(createTD());
            tabela.df.appendChild(createTD());
            tabela.lucro.appendChild(createTD());
            tabela.meta.appendChild(createTD());
        } else {
            window.alert('MÁXIMO DE MESES ATINGIDO!')
        }
    };

    if(element.classList.contains('fazerC')){
        console.log('2')
    };

    function creatInput(){
        let input = document.createElement('input');
        input.setAttribute("type", "number");
        return input;
    };

    function createTD(){
        let td = document.createElement('td');
        td.appendChild(creatInput())
        return td;
    };

    function createTH(){
        let th = document.createElement('th');
        th.innerHTML = `Mês ${contador}`;
        return th;
    };
});