init = function(){
    $(".remove-item").click(removeItem)
    $(".undo").click(undo);
    atualizaDados();
}

undo = function(){
    var carrinho = $(this).closest(".carrinho");
    carrinho.find("tr:visible").removeClass("recuperado");
    var trs = carrinho.find("tr:hidden");
    trs.addClass("recuperado");
    trs.show();
    atualizaDados();
}

atualizaDados = function(){
    var carrinhos = $(".carrinho");

    carrinhos.each(function(){
        var carrinho = $(this);
        var itens = carrinho.find(".item-total:visible");
        var total = 0;
        var qtd   = 0;
        itens.each(function(){
            var valorTotalItem = parseFloat($(this).text());
            total += valorTotalItem;
            qtd++;
        });
        carrinho.find(".valor-total").text(total);
        carrinho.find(".quantidade-de-itens").text(qtd);
    })
}

removeItem = function(event){
    event.preventDefault(); 
    var self = $(this);
    self.closest("tr").hide();
    atualizaDados();
}
$(init);

//closest(itemBusca) -- pega o ancestral mais próximo que atenda ao itemBusca
//prev() -- pega o nó imediatamente antes
//next() -- pega o nó imediatamente após
//siblings(itemBusca) -- pega todos os nós irmãos que atendam ao itemBusca
//find(itemBusca) -- pega o próximo nó filho, neto, bisneto... que atenda ao itemBusca
//itemBusca = id, class, tag ou qualquer seletor usado no css.