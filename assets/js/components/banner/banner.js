const banner = (bannerType, banners) => {
    const interval = 3000;
    const transitionDuration = 1000;
    const bannerContainer = document.querySelector(`.banner-container.${bannerType}`);
    let currentIndex = 0;

    const updateBanner = () => {
        const nextIndex = (currentIndex + 1) % banners.length;
        const { img, link } = banners[nextIndex];
        const newBanner = document.createElement('a');
        newBanner.href = link;
        newBanner.classList.add('banner', 'next');

        const newImage = new Image();
        newImage.src = `/assets/img/components/banner/${img}.jpg`;
        newImage.alt = img;
        newImage.onload = () => {
            newBanner.appendChild(newImage);
            bannerContainer.appendChild(newBanner);

            setTimeout(() => {
                const activeBanner = bannerContainer.querySelector('.banner.active');
                if (activeBanner) {
                    activeBanner.classList.remove('active');
                    setTimeout(() => {
                        activeBanner.remove();
                    }, transitionDuration);
                }
                newBanner.classList.add('active');
                newBanner.classList.remove('next');
            }, 50);
        };

        currentIndex = nextIndex;
    };

    updateBanner();
    setInterval(updateBanner, interval);
};

export default banner;