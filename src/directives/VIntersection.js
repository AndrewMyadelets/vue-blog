export default {
    name: 'intersection',
    mounted(el, binding) {
        let options = {
            threshold: 0.5,
        };

        let callback = ([entry]) => {
            if (entry.isIntersecting) {
                binding.value();
            }
        };

        let observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
}