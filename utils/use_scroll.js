import { useEffect, useState } from 'react';

export const HideShowNavbarOnScroll = ({ targetRef, className, startPosition }) => {
	useEffect(() => {
		var prevScrollpos = window.pageYOffset;
		const handleFunction = () => {
			if (!targetRef.current) return;
			if (window.scrollY === 0) targetRef.current.classList.remove(className);
			if (window.scrollY < startPosition) return;

			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) targetRef.current.classList.remove(className);
			else targetRef.current.classList.add(className);
			prevScrollpos = currentScrollPos;
		};

		window.addEventListener('scroll', handleFunction);
		return () => window.removeEventListener('scroll', handleFunction);
	}, [targetRef, className]);
};

export const ChangeClassNameAtPosition = ({ targetRef, startPosition, className }) => {
	useEffect(() => {
		const handleFunction = () => {
			if (!targetRef.current) return;
			if (window.scrollY > startPosition) targetRef.current.classList.add(...className?.split(' '));
			else targetRef.current.classList.remove(...className?.split(' '));
		};

		window.addEventListener('scroll', handleFunction);
		return () => window.removeEventListener('scroll', handleFunction);
	}, [targetRef, startPosition]);
};

export const LoadMoreDataAtWindowBottom = ({ fetching }) => {
	const [loadMore, setLoadMore] = useState(false);
	const [scrollPos, setScrollPos] = useState('');

	useEffect(() => {
		const handleFunction = () => {
			if (fetching) return;
			if (window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
				setLoadMore(true);
				setScrollPos(window.scrollY);
			} else {
				if (fetching) return;
				setLoadMore(false);
			}
		};

		window.addEventListener('scroll', handleFunction);
		return () => window.removeEventListener('scroll', handleFunction);
	}, [fetching]);

	return { loadMore, scrollPos };
};

export const SmoothScrollToPosition = ({ element, posititon, trigger }) => {
	useEffect(() => {
		window.scroll({ ...posititon, behavior: 'smooth' });
	}, [trigger ? trigger : null]);
};

export const ShowElementAtPosition = ({ targetRef, position }) => {
	useEffect(() => {
		const handleFunction = () => {
			if (!targetRef.current) return;
			if (window.scrollY > position || document.documentElement.scrollTop > position) {
				targetRef.current.style.display = 'block';
			} else {
				targetRef.current.style.display = 'none';
			}
		};

		window.addEventListener('scroll', () => handleFunction());
		return () => window.removeEventListener('scroll', () => handleFunction());
	}, [targetRef, position]);
};
