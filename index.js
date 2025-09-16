document.addEventListener("DOMContentLoaded", function () {
  const ano = document.getElementById("ano-atual");
  if (ano) {
    ano.textContent = new Date().getFullYear();
  }


   // Atualizar ano atual
      document.getElementById('ano-atual').textContent = new Date().getFullYear();

      // Smooth scroll para links internos
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Navbar background ao fazer scroll
      window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(0, 74, 173, 0.98)';
        } else {
          navbar.style.background = 'rgba(0, 74, 173, 0.95)';
        }
      });

      // Animação de entrada para cards de serviço
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observar cards de serviço
      document.querySelectorAll('.service-card, .contact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      });

      // Efeito de digitação no título principal
      function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
          if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
          }
        }
        type();
      }

      // Aplicar efeito de digitação quando a página carregar
      window.addEventListener('load', () => {
        const heroTitle = document.querySelector('.hero h1');
        const originalText = heroTitle.textContent;
        setTimeout(() => {
          typeWriter(heroTitle, originalText, 80);
        }, 500);
      });

      // Contador animado para estatísticas (pode ser expandido futuramente)
      function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
          start += increment;
          if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
          } else {
            element.textContent = target;
          }
        }
        updateCounter();
      }

      // Scroll suave para o topo
      window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 500) {
          if (!document.querySelector('.scroll-top-btn')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-top-btn position-fixed';
            scrollBtn.style.cssText = `
              bottom: 20px;
              right: 20px;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background: var(--brand-primary);
              color: white;
              border: none;
              font-size: 1.2rem;
              cursor: pointer;
              z-index: 1000;
              transition: all 0.3s ease;
              box-shadow: var(--shadow-medium);
            `;
            scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
            scrollBtn.addEventListener('click', () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            scrollBtn.addEventListener('mouseenter', () => {
              scrollBtn.style.transform = 'scale(1.1)';
              scrollBtn.style.background = 'var(--brand-secondary)';
            });
            scrollBtn.addEventListener('mouseleave', () => {
              scrollBtn.style.transform = 'scale(1)';
              scrollBtn.style.background = 'var(--brand-primary)';
            });
            document.body.appendChild(scrollBtn);
          }
        } else {
          const scrollBtn = document.querySelector('.scroll-top-btn');
          if (scrollBtn) {
            scrollBtn.remove();
          }
        }
      });
});


