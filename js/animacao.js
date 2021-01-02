const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".texto", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.to(".intro", { y: "-100%", duration: 1.5, delay: 0.5 }, 1);
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1, delay:0.25 });

