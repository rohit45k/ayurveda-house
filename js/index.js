const workouts = [...document.getElementsByClassName('workout')];

const clearActiveClass = () => {
  workouts.map((workout) => workout.classList.remove('active'));
};

workouts.map((workout) =>
  workout.addEventListener('mouseover', () => {
    clearActiveClass();
    workout.classList.add('active');
  })
);
