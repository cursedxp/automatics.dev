const ANIMATION_DURATION = 0.6;

const createAnimation = (
  initial = {},
  animate = {},
  transition = {},
  exit = {}
) => ({
  initial,
  animate,
  exit,
  transition: { duration: ANIMATION_DURATION, ...transition },
});

export const animations = {
  header: createAnimation(
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1 }
  ),
  card: createAnimation(
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0 }
  ),
  content: createAnimation(
    { opacity: 0 },
    { opacity: 1 },
    {},
    { opacity: 0 }
  ),
  fadeIn: createAnimation(
    { opacity: 0 },
    { opacity: 1 }
  ),
  slideUp: createAnimation(
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1 }
  ),
  slideDown: createAnimation(
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1 }
  ),
};

export default animations;