const d = document,
    w= window;

export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]");

    const callback = (entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.play()
            } else{
                entry.target.pause();
            }

            w.addEventListener("visibilitychange", () => {
                if (d.visibilityState === "visible" && entry.isIntersecting) {
                  entry.target.play();
                  //console.log(entry.target);
                } else {
                  entry.target.pause();
                }
            });
        })
    };

    const observer = new IntersectionObserver(callback, {threshold: 0.5});

    $videos.forEach(el => observer.observe(el));
}