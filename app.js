function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log('Section:', section);

    // Obtém o valor do campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    console.log('Campo de Pesquisa:', campoPesquisa);

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma cachoeira ou outro termo de busca.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Verifica se as propriedades estão definidas e se não são nulas
        let titulo = dado.titulo ? dado.titulo.toLowerCase() : "";
        let descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
        let tags = dado.tags ? dado.tags.toLowerCase() : "";

        // Verifica se o título, descrição ou tags contêm o termo de pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Adiciona o item encontrado à string de resultados
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }

        // Exibe no console se houve uma correspondência para depuração
        console.log(`Título contém pesquisa: ${titulo.includes(campoPesquisa)}, Descrição contém pesquisa: ${descricao.includes(campoPesquisa)}, Tags contém pesquisa: ${tags.includes(campoPesquisa)}`);
    }

    // Se nenhum resultado for encontrado, exibe uma mensagem de aviso
    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado para sua busca.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
