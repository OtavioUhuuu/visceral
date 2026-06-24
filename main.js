// --- 1. SELEÇÃO DE ELEMENTOS DO DOM ---
const numeroSenha = document.querySelector('.parametro-senha__texto');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const forcaSenha = document.querySelector('.forca');
const valorEntropia = document.querySelector('.entropia');

// --- 2. CONFIGURAÇÕES INICIAIS ---
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const CARACTERES = {
    maiusculas: 'ABCDEFGHIJKLMNOPQRSTUVXYWZ',
    minusculas: 'abcdefghijklmnopqrstuvxywz',
    numeros: '0123456789',
    simbolos: '!@%*?'
};

// --- 3. ATRIBUIÇÃO DE EVENTOS ---
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

// Adiciona evento de clique para atualizar a senha em tempo real em todos os checkboxes
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

// Inicializa gerando a primeira senha na tela
geraSenha();

// --- 4. FUNÇÕES DE CONTROLE DE TAMANHO ---
function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}

// --- 5. LÓGICA PRINCIPAL: GERAÇÃO DA SENHA ---
function geraSenha() {
    let alfabeto = '';

    // Monta o alfabeto unificado baseado nos filtros selecionados
    if (checkbox[0].checked) alfabeto += CARACTERES.maiusculas;
    if (checkbox[1].checked) alfabeto += CARACTERES.minusculas;
    if (checkbox[2].checked) alfabeto += CARACTERES.numeros;
    if (checkbox[3].checked) alfabeto += CARACTERES.simbolos;

    // Se nenhum checkbox estiver ativo, limpa tudo e para a execução
    if (alfabeto.length === 0) {
        campoSenha.value = '';
        forcaSenha.classList.remove('fraca', 'media', 'forte');
        valorEntropia.textContent = "Selecione pelo menos uma opção acima.";
        return;
    }

    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];
    }
    
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}

// --- 6. CLASSIFICAÇÃO DA SENHA E CÁLCULO DA ENTROPIA ---
function classificaSenha(tamanhoAlfabeto) {
    // Fórmula matemática da Entropia (H = L * log2(N))
    const entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    
    // Reseta visual das cores da barra de força
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    
    // Classificação baseada nos bits reais de complexidade
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && // --- 1. SELEÇÃO DE ELEMENTOS DO DOM ---
const numeroSenha = document.querySelector('.parametro-senha__texto');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const forcaSenha = document.querySelector('.forca');
const valorEntropia = document.querySelector('.entropia');

// --- 2. CONFIGURAÇÕES INICIAIS ---
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const CARACTERES = {
    maiusculas: 'ABCDEFGHIJKLMNOPQRSTUVXYWZ',
    minusculas: 'abcdefghijklmnopqrstuvxywz',
    numeros: '0123456789',
    simbolos: '!@%*?'
};

// --- 3. ATRIBUIÇÃO DE EVENTOS ---
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

// Adiciona evento de clique para atualizar a senha em tempo real em todos os checkboxes
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

// Inicializa gerando a primeira senha na tela
geraSenha();

// --- 4. FUNÇÕES DE CONTROLE DE TAMANHO ---
function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}

// --- 5. LÓGICA PRINCIPAL: GERAÇÃO DA SENHA ---
function geraSenha() {
    let alfabeto = '';

    // Monta o alfabeto unificado baseado nos filtros selecionados
    if (checkbox[0].checked) alfabeto += CARACTERES.maiusculas;
    if (checkbox[1].checked) alfabeto += CARACTERES.minusculas;
    if (checkbox[2].checked) alfabeto += CARACTERES.numeros;
    if (checkbox[3].checked) alfabeto += CARACTERES.simbolos;

    // Se nenhum checkbox estiver ativo, limpa tudo e para a execução
    if (alfabeto.length === 0) {
        campoSenha.value = '';
        forcaSenha.classList.remove('fraca', 'media', 'forte');
        valorEntropia.textContent = "Selecione pelo menos uma opção acima.";
        return;
    }

    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];
    }
    
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}

// --- 6. CLASSIFICAÇÃO DA SENHA E CÁLCULO DA ENTROPIA ---
function classificaSenha(tamanhoAlfabeto) {
    // Fórmula matemática da Entropia (H = L * log2(N))
    const entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    
    // Reseta visual das cores da barra de força
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    
    // Classificação baseada nos bits reais de complexidade
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia <= 57) {
        forcaSenha.classList.add('media');
    } else {
        forcaSenha.classList.add('fraca');
    }

    // Calcula a estimativa de tempo em dias (Base: 100 milhões de palpites/segundo)
    const diasBrutos = (2 ** entropia) / (100e6 * 60 * 60 * 24);
    
    // Formata o tempo de visualização para o usuário de forma elegante
    let exibicaoTempo = "";
    if (diasBrutos > 365) {
        const anos = Math.floor(diasBrutos / 365);
        exibicaoTempo = "mais de " + anos.toLocaleString('pt-BR') + " anos";
    } else {
        const dias = Math.floor(diasBrutos);
        exibicaoTempo = dias.toLocaleString('pt-BR') + (dias === 1 ? " dia" : " dias");
    }

    valorEntropia.textContent = "Um computador pode levar até " + exibicaoTempo + " para descobrir essa senha.";
}entropia <= 57) {
        forcaSenha.classList.add('media');
    } else {
        forcaSenha.classList.add('fraca');
    }

    // Calcula a estimativa de tempo em dias (Base: 100 milhões de palpites/segundo)
    const diasBrutos = (2 ** entropia) / (100e6 * 60 * 60 * 24);
    
    // Formata o tempo de visualização para o usuário de forma elegante
    let exibicaoTempo = "";
    if (diasBrutos > 365) {
        const anos = Math.floor(diasBrutos / 365);
        exibicaoTempo = "mais de " + anos.toLocaleString('pt-BR') + " anos";
    } else {
        const dias = Math.floor(diasBrutos);
        exibicaoTempo = dias.toLocaleString('pt-BR') + (dias === 1 ? " dia" : " dias");
    }

    valorEntropia.textContent = "Um computador pode levar até " + exibicaoTempo + " para descobrir essa senha.";
}
