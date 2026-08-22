function openSurprise() {

    document.getElementById("welcome")
        .style.display = "none";

    document.getElementById("surprise")
        .classList.remove("hidden");

    createHearts();

    startTyping();
}


/* Typing Message */

const message = `
Dear Sister no life Guider ❤️

Sometimes I may tease you,
sometimes we may fight over the smallest things 😂,
but deep inside, I know how lucky I am
to have a sister like you.

Thank you for all the laughter,
all the memories,
all the crazy moments,
and for simply being YOU.

No matter where life takes us,
you will always have a special place
in my heart.

May you always be happy,
successful and smiling.

Happy Raksha Bandhan, my dear sister Babdi ! 🪢❤️

With lots of love,
Your Brother Ganesh❤️
`;


function startTyping() {

    const element =
        document.getElementById("typing");

    let index = 0;

    function type() {

        if (index < message.length) {

            element.innerHTML +=
                message.charAt(index)
                .replace(/\n/g, "<br>");

            index++;

            setTimeout(type, 35);
        }
    }

    type();
}


/* Floating Hearts */

function createHearts() {

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            ["❤️", "💖", "💕", "✨", "💗"]
            [Math.floor(Math.random() * 5)];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.zIndex = "999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration =
            Math.random() * 4000 + 3000;

        heart.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(-${window.innerHeight + 100}px)
                         rotate(360deg)`,

                    opacity: 0
                }
            ],

            {
                duration: duration,

                easing: "linear"
            }
        );

        setTimeout(() => {

            heart.remove();

        }, duration);

    }, 500);
}


/* Final Surprise */

function finalSurprise() {

    const final =
        document.getElementById("finalMessage");

    final.classList.remove("hidden");

    final.scrollIntoView({
        behavior: "smooth"
    });

    fireworks();

}


/* Magical Fireworks */

function fireworks() {

    for (let i = 0; i < 50; i++) {

        const star =
            document.createElement("div");

        star.innerHTML = "✨";

        star.style.position = "fixed";

        star.style.left = "50%";

        star.style.top = "50%";

        star.style.fontSize = "25px";

        star.style.zIndex = "999";

        document.body.appendChild(star);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 400 + 100;

        star.animate(

            [
                {
                    transform: "translate(0,0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            ${Math.cos(angle) * distance}px,
                            ${Math.sin(angle) * distance}px
                        )`,
                    opacity: 0
                }
            ],

            {
                duration: 1500,

                easing: "ease-out"
            }
        );

        setTimeout(() => {

            star.remove();

        }, 1500);
    }
}