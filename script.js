/* ==========================================================================
   INTERATIVIDADE E VALIDAÇÃO - ESTÉTICA COQUETTE (AGRINHO 2026)
   ========================================================================== */

// Espera todo o documento HTML carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. CONFIGURAÇÃO DO FORMULÁRIO DE INSCRIÇÃO ---
    const formulario = document.getElementById("form-contato");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            // Impede o recarregamento padrão da página ao enviar o formulário
            evento.preventDefault();

            // Captura os valores digitados pelo usuário
            const nomeUsuario = document.getElementById("nome").value.trim();
            const emailUsuario = document.getElementById("email").value.trim();

            // Validação simples de segurança
            if (nomeUsuario === "" || emailUsuario === "") {
                alert("Por favor, preencha todos os campos com carinho! 🎀");
                return;
            }

            // Esconde o formulário aplicando um efeito de transição sutil
            formulario.style.opacity = "0";
            formulario.style.transition = "opacity 0.5s ease";
            
            setTimeout(() => {
                formulario.classList.add("escondido");
                
                // Personaliza e exibe a caixinha de sucesso bem meiga
                mensagemSucesso.innerHTML = `
                    <p style="font-size: 16pt; margin-bottom: 5px;">Inscrição Realizada! 🌸</p>
                    <p style="font-size: 11pt; font-weight: normal;">
                        Obrigado, <strong>${nomeUsuario}</strong>! Entraremos em contato através do e-mail <em>${emailUsuario}</em> com novidades sobre a Reforma Agrária Popular. 🎀
                    </p>
                `;
                
                // Mostra a mensagem tirando a classe 'escondido' do CSS
                mensagemSucesso.classList.remove("escondido");
                mensagemSucesso.style.opacity = "0";
                mensagemSucesso.style.transition = "opacity 0.5s ease";
                
                // Pequeno delay para ativação do efeito visual de fade-in
                setTimeout(() => {
                    mensagemSucesso.style.opacity = "1";
                }, 50);

            }, 500); // 500 milissegundos é o tempo para o formulário sumir completamente
        });
    }

    // --- 2. ROLAGEM SUAVE NOS LINKS DO MENU (SMOOTH SCROLL) ---
    const linksMenu = document.querySelectorAll('nav ul li a, .hero-content .btn');

    linksMenu.forEach(link => {
        link.addEventListener('click', function (evento) {
            // Garante que o link aponta para uma âncora dentro da própria página
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                evento.preventDefault(); // Evita o pulo seco/brusco na tela
                
                const elementoDestino = document.querySelector(targetId);
                
                if (elementoDestino) {
                    // Faz a página deslizar suavemente até a seção clicada
                    elementoDestino.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

});
