/* ========================================
   PORTFÓLIO - JAVASCRIPT
   Funcionalidades interativas da página
   ======================================== */

// ========== MENU MOBILE ==========
// Seleciona os elementos do menu mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Função para abrir/fechar o menu mobile
hamburger.addEventListener('click', function() {
    // Alterna a classe 'active' no hambúrguer e no menu
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu quando clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== NAVEGAÇÃO ATIVA ==========
// Função para destacar o link de navegação da seção atual
function highlightActiveLink() {
    // Pega todas as seções da página
    const sections = document.querySelectorAll('section');
    
    // Para cada seção, verifica se está visível
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Se a seção está visível na tela
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Adiciona a classe 'active' ao link correspondente
            const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Executa a função quando a página é rolada
window.addEventListener('scroll', highlightActiveLink);

// ========== FORMULÁRIO DE CONTATO ==========
// Seleciona o formulário de contato
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Função para enviar o formulário
contactForm.addEventListener('submit', function(e) {
    // Previne o envio padrão do formulário
    e.preventDefault();
    
    // Pega os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validação simples (verifica se os campos estão preenchidos)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Aqui você poderia enviar os dados para um servidor
    // Por enquanto, apenas mostramos uma mensagem de sucesso
    
    // Exibe a mensagem de sucesso
    successMessage.classList.add('show');
    
    // Limpa os campos do formulário
    contactForm.reset();
    
    // Esconde a mensagem de sucesso após 3 segundos
    setTimeout(function() {
        successMessage.classList.remove('show');
    }, 3000);
    
    // Log no console para fins de debug
    console.log('Formulário enviado:', {
        name: name,
        email: email,
        message: message
    });
});

// ========== SCROLL SUAVE ==========
// Função para scroll suave ao clicar em links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Pega o ID do destino
        const targetId = this.getAttribute('href');
        
        // Se o ID existe, faz scroll suave
        if (targetId !== '#' && document.querySelector(targetId)) {
            e.preventDefault();
            
            const target = document.querySelector(targetId);
            const offsetTop = target.offsetTop - 60; // Subtrai a altura da navbar
            
            // Scroll suave
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== EFEITO DE DIGITAÇÃO ==========
// Função para criar efeito de digitação no título
function typewriterEffect() {
    // Seleciona o elemento com a classe 'highlight'
    const highlightElement = document.querySelector('.highlight');
    
    if (!highlightElement) return;
    
    // Texto original
    const originalText = highlightElement.textContent;
    
    // Limpa o elemento
    highlightElement.textContent = '';
    
    // Variável para controlar o índice
    let index = 0;
    
    // Função para adicionar caracteres um por um
    function type() {
        if (index < originalText.length) {
            // Adiciona um caractere
            highlightElement.textContent += originalText[index];
            index++;
            
            // Chama a função novamente após 50ms
            setTimeout(type, 50);
        }
    }
    
    // Inicia o efeito de digitação
    type();
}

// Executa o efeito de digitação quando a página carrega
window.addEventListener('load', typewriterEffect);

// ========== OBSERVADOR DE INTERSECÇÃO ==========
// Função para animar elementos quando entram na tela
function setupIntersectionObserver() {
    // Opções do observador
    const options = {
        threshold: 0.1,      // Ativa quando 10% do elemento está visível
        rootMargin: '0px 0px -100px 0px' // Margem de 100px na parte inferior
    };
    
    // Cria o observador
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // Se o elemento entrou na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'animate' (você pode usar isso no CSS)
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                
                // Para de observar este elemento
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observa todos os cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observa os itens de experiência
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        observer.observe(item);
    });
}

// Executa o observador quando a página carrega
window.addEventListener('load', setupIntersectionObserver);

// ========== CONTADOR DE VISITANTES (OPCIONAL) ==========
// Função para contar visitantes usando localStorage
function initializeVisitorCounter() {
    // Pega o número de visitantes do localStorage
    let visitCount = localStorage.getItem('visitCount');
    
    // Se não existe, começa com 1
    if (visitCount === null) {
        visitCount = 1;
    } else {
        // Caso contrário, incrementa
        visitCount = parseInt(visitCount) + 1;
    }
    
    // Salva o novo número no localStorage
    localStorage.setItem('visitCount', visitCount);
    
    // Log no console (você pode usar isso para debug)
    console.log('Número de visitas:', visitCount);
}

// Executa o contador quando a página carrega
window.addEventListener('load', initializeVisitorCounter);

// ========== VALIDAÇÃO DE EMAIL ==========
// Função para validar email
function validateEmail(email) {
    // Expressão regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Adiciona validação ao campo de email
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        // Se o email é inválido
        if (this.value && !validateEmail(this.value)) {
            // Adiciona uma classe de erro (você pode estilizar isso no CSS)
            this.style.borderColor = '#c85a3a';
        } else {
            // Remove a classe de erro
            this.style.borderColor = '#e8e8e8';
        }
    });
}

// ========== TEMA CLARO/ESCURO (OPCIONAL) ==========
// Função para alternar tema (se implementado)
function toggleTheme() {
    // Pega o tema atual do localStorage
    let currentTheme = localStorage.getItem('theme') || 'light';
    
    // Alterna o tema
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Salva o novo tema
    localStorage.setItem('theme', newTheme);
    
    // Aplica o tema ao documento
    document.documentElement.setAttribute('data-theme', newTheme);
    
    console.log('Tema alterado para:', newTheme);
}

// ========== INICIALIZAÇÃO ==========
// Função que executa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfólio carregado com sucesso!');
    
    // Executa a função de navegação ativa
    highlightActiveLink();
    
    // Você pode adicionar mais inicializações aqui
});

// ========== SCROLL INFINITO (OPCIONAL) ==========
// Função para detectar quando o usuário chega ao final da página
window.addEventListener('scroll', function() {
    // Calcula a altura total da página
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    
    // Se chegou perto do final (90%)
    if (scrollTop + winHeight >= docHeight * 0.9) {
        // Você pode carregar mais conteúdo aqui
        console.log('Chegou perto do final da página');
    }
});

// ========== PREVENÇÃO DE CONSOLE ERRORS ==========
// Função para tratamento de erros
window.addEventListener('error', function(event) {
    console.error('Erro detectado:', event.error);
});