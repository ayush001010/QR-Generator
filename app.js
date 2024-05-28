const text = document.querySelector(".text-box input");
        const img = document.querySelector(".qr-space img");

        const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

        function generator() {
            if (text.value.length > 0) {
                img.src = url + text.value;
                img.style.display = 'block';
                text.value = "";
            } else {
                text.classList.add('shake');

                // Remove the shake class after the animation completes
                text.addEventListener('animationend', function() {
                    text.classList.remove('shake');
                }, { once: true });

                img.style.display = 'none';
            }
        }