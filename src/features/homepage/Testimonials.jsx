import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '../../data/testimonials';
import { NavLink } from 'react-router-dom';
import { useUser } from '../authentication/useUser';

const TestimonialContainer = styled.div`
    height: 400px;
    padding: 40px 20px;
    background-color: var(--color-green-50);
`;

const TestimonialItem = styled.div`
    text-align: center;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background: white;
    margin-bottom: 20px;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: var(--color-green-800);
    }

    p {
        font-size: 1rem;
        color: var(--color-green-800);
        max-width: 600px;
        line-height: 1.5;
    }
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 40px;
    color: var(--color-green-700);
    font-size: 2rem;
`;

const Button = styled.button`
    margin-top: 20px;
    background-color: var(--color-green-400);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--color-green-500);
    }
`;

function Testimonials() {
    const { isAuthenticated } = useUser();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <>
            <TestimonialContainer>
                <Title>What Our Customers Say</Title>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialItem key={index}>
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.comment}</p>
                        </TestimonialItem>
                    ))}
                </Slider>
            </TestimonialContainer>
            <NavLink to={isAuthenticated ? 'profile' : 'authorization'}>
                <Button>Tell us about your impressions</Button>
            </NavLink>
        </>
    );
}

export default Testimonials;
