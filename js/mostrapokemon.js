function mostraPokemon(url) {
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  //  2. TRATAR DADOS RECEBIDOS PELA URL
  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR
  //     OS COMPONENTES HTML NO MODAL
  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)

console.log("aki");

  const http = new XMLHttpRequest();
  
  http.open("get", url);

  http.send();
  
  http.onload = function() {
    // console.log(res);
      const pokemon = JSON.parse(http.response);
      populaModal(pokemon);
      
    }
    
    
  }
  
  
  // Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
  function populaModal(pokemon) {
    //TO-DO:
    //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
    //     SEGUINDO O PADRÃO DO BOOTSTRAP
    //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
    //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
    //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO
    
    
    // const txt1 = "<b>I </b>";                    // Create element with HTML  
    // const txt2 = $("<i></i>").text("love ");     // Create with jQuery
    // $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
    
  console.log(pokemon);  
    
    
    document.querySelector('.modal').innerHTML = modal(pokemon);
    
    $('.modal').modal('show')
  }
  
  
  function modal (pokemon){
    return `
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="text-center">
              <h1>${pokemon.name}</h1>
              <img src="${pokemon.sprites.front_default}"style="height: 250px; width: 250px" alt="">
              
            
            </div>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `



  }
  
  
  
  
  
  




// // Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
// function populaModal(pokemon) {
//   console.log(pokemon);
//   //TO-DO:
//   //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL
//   //     SEGUINDO O PADRÃO DO BOOTSTRAP
//   //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
//   //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
//   //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO
 
//  }
 
 
//  function modal(pokemon)  {
//   return  `
//   <!-- Button trigger modal -->
//  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//   Launch demo modal
//  </button>
 
//  <!-- Modal -->
//  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal Pokemon</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         <p>
//         <img src="${pokemon.image}">
//         </p>
//         <p> id: ${pokemon.id}
//         <p> nome: ${pokemon.nome}
//         <p> tipo: ${pokemon.tipo.join()}
//         <p> peso: ${pokemon.peso}
//         <p> altura: ${pokemon.altura}
//       </div>
//     </div>
//   </div>
//  </div>
//   `
//  }






