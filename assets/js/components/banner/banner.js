const banner = (bannerType, banners) => {
    const interval = 3000;
    const transitionDuration = 1000;
    const bannerTemplate = document.querySelector(`.banner.${bannerType}`);
    let currentIndex = 0;

    const updateBanner = () => {
        const nextIndex = (currentIndex + 1) % banners.length;
        const { img, link } = banners[nextIndex];

        const newImage = new Image();
        newImage.src = `/assets/img/components/banner/${img}.jpg`;
        newImage.alt = img;
        newImage.classList.add('next');

        newImage.addEventListener('load', () => {
            bannerTemplate.href = link;
            bannerTemplate.appendChild(newImage);
            setTimeout(() => {
                const activeImage = bannerTemplate.querySelector('img.active');
                if (activeImage) {
                    activeImage.classList.remove('active');
                }
                newImage.classList.add('active');
                newImage.classList.remove('next');
            }, 50);
            setTimeout(() => {
                const inactiveImage = bannerTemplate.querySelector('img:not(.active)');
                if (inactiveImage) {
                    inactiveImage.remove();
                }
            }, transitionDuration);
        });

        currentIndex = nextIndex;
    };

    updateBanner();
    setInterval(updateBanner, interval);
};

export default banner;