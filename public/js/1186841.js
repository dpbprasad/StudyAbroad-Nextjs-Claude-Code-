(function() {
  const init = () => {
    const sections = document.querySelectorAll('.country-selector-section');

    sections.forEach(section => {
      const buttons = section.querySelectorAll('.country-btn');
      const panels = section.querySelectorAll('.country-content-panel');

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const target = button.getAttribute('data-target');

          // Update buttons
          buttons.forEach(btn => {
            const dot = btn.querySelector('.indicator-dot');
            const label = btn.querySelector('span:not(.indicator-dot)');

            if (btn === button) {
              btn.classList.remove('inactive-state');
              btn.classList.add('active-state');
              if (dot) {
                dot.classList.remove('bg-transparent');
                dot.classList.add('bg-indigo-500');
              }
              if (label) {
                label.classList.remove('text-neutral-400');
                label.classList.add('text-white');
              }
            } else {
              btn.classList.remove('active-state');
              btn.classList.add('inactive-state');
              if (dot) {
                dot.classList.remove('bg-indigo-500');
                dot.classList.add('bg-transparent');
              }
              if (label) {
                label.classList.remove('text-white');
                label.classList.add('text-neutral-400');
              }
            }
          });

          // Update content panels
          panels.forEach(panel => {
            if (panel.getAttribute('data-content') === target) {
              panel.classList.remove('hidden');
              panel.classList.add('block');
            } else {
              panel.classList.remove('block');
              panel.classList.add('hidden');
            }
          });
        });
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();