init = function(){
    var itens = $(".item-total");
    var total = 0;

    for(var i = 0; i < itens.length ; i++) {
        var item = itens[i];
        total = total + parseFloat($(item).text());
    }
    $(".remove-item").click(removeItem)
    $(".undo").click(undo);
    atualizaDados();
}

undo = function(){
    $("tr:visible").removeClass("recuperado");
    var trs = $("tr:hidden");
    trs.addClass("recuperado");
    trs.show();
}

atualizaDados = function(){
    var itens = $(".item-total:visible");
    var total = 0;
    var qtd   = 0;
    itens.each(function(){
        var valorTotalItem = parseFloat($(this).text());
        total += valorTotalItem;
        qtd++;
    });
    $("#valor-total").text(total);
    $("#quantidade-de-itens").text(qtd);
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