postInit = function(){
    $(".remove-item").click(removeItem)
    $(".undo").click(undo);
    atualizaDados();

    $(".carrinho").each(function(){
        $(this).find("tr:nth-child(3n)").each(function(){
            novaPropaganda().insertAfter($(this));
        });
    });

    //$(".carrinho tbody tr").on("mouseenter", daDestaque);
    //$(".carrinho tbody tr").on("mouseleave", tiraDestaque);
    $(".carrinho tbody tr").hover(daDestaque, tiraDestaque);
    $(".alterna-propagandas").click(alternaPropagandas);
}

alternaPropagandas = function(event){
    event.preventDefault();
    $(".propaganda").fadeToggle(1000);
    $(".alterna-propagandas").toggle();
}

daDestaque = function(){
    $(this).addClass("hovering");
    $(this).find(".remove-item").fadeIn(500);
}

tiraDestaque = function(){
    $(this).removeClass("hovering");
    $(this).find(".remove-item").hide();
}

undo = function(){
    var carrinho = $(this).closest(".carrinho");
    carrinho.find("tr:visible").removeClass("recuperado");
    var trs = carrinho.find("tr:hidden");
    trs.addClass("recuperado");
    trs.show();
    atualizaDados();
}

novaPropaganda = function(){
    var propagandas = ["O que acha de comprar um carro?",
                       "O que acha de comprar uma moto?",
                       "O que acha de comprar uma casa?",
                       "O que acha de comprar um Playstation 4?"];
    var posicao = Math.floor(Math.random() * propagandas.length);

    var tr = $("<tr>").addClass("propaganda").append("<td>");
    tr.find("td").attr("colspan", 6).text(propagandas[posicao]);
    return tr;
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
$(postInit);

//closest(itemBusca) -- pega o ancestral mais próximo que atenda ao itemBusca
//prev() -- pega o nó imediatamente antes
//next() -- pega o nó imediatamente após
//siblings(itemBusca) -- pega todos os nós irmãos que atendam ao itemBusca
//find(itemBusca) -- pega o próximo nó filho, neto, bisneto... que atenda ao itemBusca
//itemBusca = id, class, tag ou qualquer seletor usado no css.